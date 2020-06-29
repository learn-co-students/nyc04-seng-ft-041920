# Rails as an API

## SWBATs
- [ ] Generate a Rails API
- [ ] Understand CORS configuration
- [ ] Use a serializer to render JSON
- [ ] Understand how to transmit data between frontend and backend using the request/response cycle
- [ ] Implement validations in Rails and use status codes to send errors

## Setting Up the Backend Rails API

Remember that when you create a new Rails application with `rails new <your_app>`, by default Rails will provide you with a ton of stuff that we will not need in order to build an API. Think of the entire ActionView library (all the view helper methods like `form_for`), ERB, the way sessions and cookies are handled, etc.

[Rails provides a way](http://edgeguides.rubyonrails.org/api_app.html) to set up a project that includes common tools needed for APIs and excludes some of the unnecessary extras. What you'll type is `rails new <your_app> --api --database=postgresql`.

(If you forget the `--api` flag you need to add this in your ApplicationController: `skip_before_action :verify_authenticity_token`)

### Instructions

* In your terminal enter the following command:

```
rails new <my_app_name> --api --database=postgresql
```

_(Replace `<my_app_name>` with the actual name of your project)_

* We specify the `--api` flag so rails knows to set this up as an API.

* Using `--database=postgresql` is optional, but it'll make it easier to deploy your app to Heroku if you choose to later.

  * One note about `postgresql` in Rails: before you run `rails db:migrate` the first time, you'll need to run `rails db:create`. This tells Postgres to create the actual database(s) for your application.

* `cd` into the new project folder you just created.

* Navigate to your Gemfile and uncomment `gem 'rack-cors'` This will allow us to setup Cross Origin Resource Sharing (CORS) in our API. You can read more about CORS [here](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing).

  * Basically, CORS is a security feature that prevents API calls from unknown origins. For example, if someone tried to use some malicious JavaScript to steal your bank information and your bank allowed API calls from anywhere, this could be a bad news bears™️ situation.
  * Let's say your bank is hosted on `https://bankofamerica.com` but a clever hacker tried to impersonate you and send a request with an *origin* of `https://couponvirus.org`. Ideally, your bank would reject requests from unknown *origins* such as `couponvirus.org` and only allow requests from trusted origins or domains like `bankofamerica.com`

* Inside of `config/initializers/cors.rb` uncomment the following code:

  ```ruby
  Rails.application.config.middleware.insert_before 0, Rack::Cors do
    allow do
      origins '*'

      resource '*',
        headers: :any,
        methods: [:get, :post, :put, :patch, :delete, :options, :head]
    end
  end
  ```

  (This snippet is from the [documentation for the rack-cors gem](https://github.com/cyu/rack-cors).)

  Inside the `allow` block, `origins '*'` means we are allowing requests from **all** origins and are allowing `[:get, :post, :patch, :delete]` requests to the API. Read [this](https://www.w3schools.com/tags/ref_httpmethods.asp) if you need a refresher on HTTP methods.

  This may come as a shock but the `config.api_only = true` option found in `config/application.rb` tells our app that it is going to be an **API only**. In other words, our API **will not generate any HTML** and instead will return JSON. The frontend is responsible for taking that JSON, formatting the data, and generating HTML to show to the user. Read [this](https://www.w3schools.com/js/js_json_intro.asp) if you want to review what JSON is and why we use it.

  For now, we will leave the origins open. Later on, we can change this to only allow requests from the address of the frontend repo––localhost:8000 or `www.myapp.com` for example.

- Make sure you add the `gem 'active_model_serializers'` to your Gemfile. Read [this](https://en.wikipedia.org/wiki/Serialization) if you're curious about serialization. Essentially, we need to convert our data into a format that can be easily transferred across a network as a string and reconstructed later. Remember, our frontend and backend live in different repositories and therefore have to make requests across the _interwebs_.

- We can use the serializer gem to specify the shape of our data when making requests. For example, if a `post` instance `has_many` `comments`, we can tell our serializer to nest the data.

`PostSerializer`

```ruby
class PostSerializer < ActiveModel::Serializer
  has_many :comments
  attributes :title, :comments
end
```

## Resources
- [Active Model Serializers Docs](https://github.com/rails-api/active_model_serializers/blob/0-10-stable/docs/general/getting_started.md)
- [Active Model Serializers Lab](https://learn.co/lessons/using-active-model-serializer)
- [Rack CORS Gem](https://github.com/cyu/rack-cors)
- [Understanding CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)