# Sessions & Cookies

## SWBATs
1. Describe the stateless nature of HTTP
2. Explain how cookies give the server access to information about our site's users across requests
3. Use the `session` hash to persist information and encrypt it

___

### Outline
- [ ] Discuss how websites use cookies
  - [ ] NYTimes, Twitter
- [ ] Use cookies to persist information about the client across requests
- [ ] Demonstrate the `session` hash in Rails
- [ ] Use the sessions to implement paywall

**Task**: 
- After viewing any of the show pages combined a total of 3 times, we want the user to view an advertisement before viewing any more pages.

___

### Cookies

Cookies are small pieces of information that are sent from the server to the client. They are then stored on the client and sent back to the server with each subsequent request. HTTP is a stateless protocol since the server doesn't maintain information about the client for all the requests. However, cookies allow us to make stateful HTTP requests by providing a way to send additional information to the server with each request.

Cookies are typically used to store session information (user login, shopping cart, etc), personalization (user preferences), and tracking information (analyzing user behavior). 

In Rails, you can access the cookies hash from any controller/view:

_app/controllers/students_controller.rb_
```ruby
def index
  if (params[:dark_mode] == 1) {
    cookies[:dark_mode] = 1
  }
  @dark_mode = cookies[:dark_mode]
end
```

Cookies in the browser are stored as plain text and can easily be manipulated by the user. 

### Sessions in Rails

From the [Rails Docs](https://guides.rubyonrails.org/security.html#sessions):

- HTTP is a stateless protocol. Sessions make it stateful.

```
Most applications need to keep track of certain state of a particular user. This
could be the contents of a shopping basket or the user id of the currently
logged in user. Without the idea of sessions, the user would have to identify,
and probably authenticate, on every request. Rails will create a new session
automatically if a new user accesses the application. It will load an existing
session if the user has already used the application.

A session usually consists of a hash of values and a session ID, usually a
32-character string, to identify the hash. Every cookie sent to the client's
browser includes the session ID. And the other way round: the browser will send
it to the server on every request from the client. In Rails you can save and
retrieve values using the session method:
```

```ruby
session[:page_count] ||= 0
@page_count = session[:page_count]
```

Rails provides several mechanisms for working with sessions. Cookies are the default option and easiest to configure.
