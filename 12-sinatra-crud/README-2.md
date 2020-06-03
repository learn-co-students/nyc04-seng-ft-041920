Sinatra CRUD Part 2
===

![Keep Climbing!](pics/keep-going.jpg)

## SWBATs
1. Make a CRUD app using Sinatra
2. Explain REST
3. Demonstrate how REST is used with CRUD
4. Configure forms to work with HTTP verbs other than GET and POST
5. Use nested params to isolate params coming from form fields
6. Render a delete button


## Outline
- Review our app so far
- Part 1: Update
  - Update form
  - Method override
  - Nested params
- Part 2: Delete
  - Delete button

___

## [REST](http://www.restular.com/) & CRUD
- [x] Create
  - [x] GET '/users/new' -> Show the user a form to create a new user
  - [x] POST '/users' -> Create a new user in our database
- [x] Read
  - [x] GET '/users' -> Show all users
  - [x] GET '/users/:id' -> Show one user
- [x] Update
  - [x] GET '/users/:id/edit' -> Show the user a form to edit an existing user
  - [x] PUT '/users/:id' -> Update the user in our database
- [x] Delete
  - [x] DELETE '/users/:id' -> Delete the user from our database

<br>
<br>

____


<img src="pics/lookathowfaryouvecome.png" alt="cable" width="500"/>

___

## HTML Forms and HTTP verbs

In the last lecture, we saw that we can use forms to make two kinds of HTTP requests, `GET` and `POST`, by changing the form's `method` attribute:

```html
<form method="POST" action="/users">
  <!--form fields here-->
</form>
```

We know based on RESTful convention that in order to update or delete something in our application, we need to use other HTTP verbs: `PUT` or `PATCH` for updating and `DELETE` for deleting. 

Unfortunately, [HTML forms don't support any methods other than GET or POST](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attr-method). In order to get around this, Sinatra (and other frameworks that follow RESTful conventions) use a special hidden field on the form that changes the HTTP verb in the server before it reaches our controller. This is commonly referred to as the *method override*. It looks like this in the form:

```html
<form method="POST" action="/users/:id">
  <input type="hidden" name="_method" value="PUT">
  <!--form fields here-->
</form>
```

We also need to add one additional line of configuration to tell Sinatra to look for this special `_method` key in the params hash, and use its value to change the HTTP verb for the request. You can **either** set this up in the ApplicationController, or the `config.ru` file (no need to do both!):


```rb
# in config.ru

use Rack::MethodOverride # this will tell our application to look for the _method key in params
run ApplicationController

```

--OR--

```rb
# in application_controller.rb
class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
    set :method_override, true # this will tell our application to look for the _method key in params
  end

  # route etc
  # ...

end
```

___

## Working With Nested Params

Consider the following HTML form:

```erb
<h1>Edit <%= @user.username %></h1>
<form method="POST" action="/users/<%= @user.id %>">
  <input type="hidden" name="_method" value="PUT">
  <input type="text" name="username" value="<%= @user.username %>">
  <input type="number" name="age" value="<%= @user.age %>">
  <input type="submit">
</form>
```

When this form is submitted, we'll need a few pieces of information in order to find and update a user in our database: 
- The user's ID
- Any fields from the form to update specific attributes for the user

Currently, when the form is submitted, all of the information we need is grouped together in the params hash:

```rb
  params = {
    "_method"=>"PUT",
    "name"=>"Storm",
    "age"=>"40",
    "id"=>"1"
  }
```
Ideally, we'd like to keep the information separate so we can (1) find the user, then (2) use mass assignment to update the user using all the fields from the form. Something like the example below - with all our form fields _nested_ in their own key in the params hash - would be great:

```rb
  params = {
    "_method"=>"PUT",
    "id"=>"1",
    "user" => {
      "username"=>"Storm",
      "age"=>"40"
    }
  }
```

In order to get our params hash looking the way we want it, we need to update the `name` attributes for our form's input fields:

```erb
<h1>Edit <%= @user.title %></h1>
<form method="POST" action="/users/<%= @user.id %>">
  <input type="hidden" name="_method" value="PUT">
  <input type="text" name="user[username]" value="<%= @user.username %>">
  <input type="number" name="user[age]" value="<%= @user.age %>">
  <input type="submit">
</form>
```

With our new changes to the form, the params will come out exactly as we need them, and we can update our route like so:

```rb
  put '/users/:id' do
    # model
    user = User.find(params[:id])
    user.update(params[:user]) # nested params hash

    # response
    redirect "/users/#{user.id}"
  end
```

## Deleting

In order to delete a resource following RESTful routing conventions, we'll need to send a `DELETE` request to the server. We can use the same technique as we did for editing a resource and use a form with a special method override field to send the request:

```erb
<form method="POST" action="/users/<%= @user.id %>">
  <input type="hidden" name="_method" value="DELETE">
  <input type="submit" value="Delete">
</form>
```

In our controller, we can then handle this delete request with a route that includes the resource's id:

```rb
  delete '/users/:id' do
    # model
    user = User.find(params[:id])
    user.destroy

    # response
    redirect "/users"
  end
```
