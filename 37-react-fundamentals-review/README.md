# React Fundamentals Review

Keep working on our sample app; add features and learn more React on the way!

## Questions?
- getting comfortable with different syntax (old vs new) (class vs function)
- when to use state!

## Things to discuss
- Use `json-server` as API
- Update start script in `package.json`

## Features to Build/Update
- [x] Fetch (onClick)
- [x] Pagination?
- [x] Likes
- show only favorites
- toggling a class

Ideas?
- play music!

## For Next Lecture...
- What forms should we add?

```rb
# fetch GET /animals
# ?page=1&number=15 (query string)

params[:page] # comes from the query string
params[:number] # comes from the query string

Animal.limit(params[:number]).offset(params[:page])

```