# Rails Associations

<img src="pics/control-key.jpg" alt="Out of control" width="550"/>


## SWBATs
1. Set up ActiveRecord associations on models in Rails
2. Use data from the associations in view files
3. Render a dropdown `<select>` tag in a form using the `collection_select` helper
4. Handle deleting an instance of a model that has other records associated using `dependent: :destroy`

## Outline
- [x] Add an additional model to our domain
  - [x] Create relationship using ActiveRecord
  - [x] Use information from the association in our views
  - [x] Make a create form for the new model with a dropdown
  - [x] Update our delete method from the first model

___ 

### ActiveRecord Associations Review

Rails uses ActiveRecord on models under the hood, so your knowledge of associations from Mod 1 is crucial to setting you up for success working with Rails. 

For convenience, Rails lets you create associations when you are generating a model using `rails g model`. 

For example, if we have relationship where a Student `has_many` Labs and a Lab `belongs_to` a Student, you can generate the Labs model with: 

`rails g model Lab name student:belongs_to`

Adding `student:belongs_to` in the generate command will:
- Create a `student_id` column in the migration
- Add `belongs_to :student` in the Lab model class
 
You might also see `references` instead of `belongs_to` - something like `rails g model student:references`. Both work exactly the same (`belongs_to` is an alias for `references`). 

#### More Info: 
[Active Record Migrations — Ruby on Rails Guides](https://guides.rubyonrails.org/active_record_migrations.html#creating-a-standalone-migration)

___

### Using Associations in View Files

Using our Student -< Lab domain, let's assume our models are set up as follows:

- A Student `has_many` labs:
```rb
# app/models/student.rb
class Student < ApplicationRecord
  has_many :labs
end
```

- A Lab `belongs_to` a student
```rb
# app/models/lab.rb
class Lab < ApplicationRecord
  belongs_to :student
end
```

Since we have created the associations in our models, we can now access information using the association in our views:

```erb
<!--app/views/labs/show.erb-->
<h1><%= @lab.name %></h1>
<p>This lab belongs to <%= @lab.student.name %> </p>
```

___

### Dropdowns with `collection_select`

If we wanted to give a user the ability to create a new Lab in our application, they would need some way of selecting the `student_id` for the associated Student (since a Lab belongs to a Student). In Sinatra, we showed that the `<select>` tag gives our users a nice interface to work with rather than using an input field to type in a student id number:

```html
<select name="student_id">
  <option value="1">Michelle</option>
  <option value="2">Rei</option>
  <option value="3">Jack</option>
  <option value="4">Ian</option>
</select>
```

In Rails, there's a helper method for building out `<select>` tags called `collection_select`. You can use it with `form_for` like this:

```erb
<!--app/views/labs/new.erb-->
<%= form_for @lab do |f| %>
  <%= f.collection_select :student_id, @students, :id, :name %>
  <%= f.submit %>
<% end %>
```

In the above example, the `collection_select` will iterate over each instance of a student in the `@students` variable to generate the `<option>` tags within our select tag, using `student.id` for the value and the `student.name` as the text to display to the user. It would generate the following HTML for a select tag:

```html
<select name="lab[student_id]" id="lab_student_id">
  <option value="1">Michelle</option>
  <option value="2">Rei</option>
  <option value="3">Jack</option>
  <option value="3">Ian</option>
</select>
```

The selected value of the dropdown would come through in the params under `params[:lab][:student_id]` so we can use it to create a new instance of a Lab and associate it with the student selected in the dropdown.

#### More Info: 
[collection_select (ActionView::Helpers::FormOptionsHelper) - APIdock](https://apidock.com/rails/ActionView/Helpers/FormOptionsHelper/collection_select)

___

### Controller Filter Methods

Controller filters are methods that you can specify within a given controller to instruct Rails to run certain code before or after running a controller method.

Consider the following controller:

```rb
class StudentsController < ApplicationController

  def index
    @students = Student.all
  end

  def show
    @student = Student.find(params[:id])
  end

  def edit
    @student = Student.find(params[:id])
  end

  def update
    @student = Student.find(params[:id])
    @student.update(params.require(:student).permit(:name, :age))
    redirect_to @student
  end

end
```

In the `show`, `edit` and `update` methods, we're repeating the code to find a student based on params and assign that student to an instance variable. We could refactor this to a helper method, like `set_student` below:

```rb
class StudentsController < ApplicationController

  def index
    @students = Student.all
  end

  def show
    set_student
  end

  def edit
    set_student
  end

  def update
    set_student
    @student.update(params.require(:student).permit(:name, :age))
    redirect_to @student
  end

  private

  def set_student
    @student = Student.find(params[:id])
  end
end
```

Rails lets us take this one step further and define methods we want to run before certain controller actions using the `before_action` helper:


```rb
class StudentsController < ApplicationController
  before_action :set_student, only: [:show, :edit, :update]

  def index
    @students = Student.all
  end

  def show
  end

  def edit
  end

  def update
    @student.update(params.require(:student).permit(:name, :age))
    redirect_to @student
  end

  private

  def set_student
    @student = Student.find(params[:id])
  end
end
```

This code tells Rails: "before you run the show, edit, and update actions, run the set_student method". This is a helpful pattern for DRYing up our code and reusing logic across our controller actions.

#### More Info: 
[Action Controller Overview — Ruby on Rails Guides](https://guides.rubyonrails.org/action_controller_overview.html#filters)


### Partials

If you have any HTML you'd like to reuse in multiple view files, you can extract it to a partial view file. This helps cut down on writing repetitive code. For example, we can re-use the code for a `form_for` for both the `new` and `edit` views. 

*app/views/labs/new.erb*
```erb
<h1>New Lab Form</h1>
<%= render "form" %>
```

*app/views/labs/edit.erb*
```erb
<h1>Edit Lab Form</h1>
<%= render "form" %>
```

*app/views/labs/_form.erb*
```erb
<%= form_for @lab do |f| %>
  <%= f.collection_select :student_id, @students, :id, :name %>
  <%= f.submit %>
<% end %>
```

Note the naming convention: filenames for partials **must** start with an underscore (\_) character, and you use the render helper *without* the underscore to tell Rails which file to use.


#### More Info: 
[Layouts and Rendering in Rails — Ruby on Rails Guides](https://edgeguides.rubyonrails.org/layouts_and_rendering.html#using-partials)
