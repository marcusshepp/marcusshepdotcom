I can render a specific template by slug name.
I do this by giving each `Post` a `url` column. In that column there is a string with no spaces. That string has to match an html file in `b/templates/posts` directory.

My posts html, that iterates over all the available posts, can then have a clickable url, the url takes in the slug. I use that slug string to find the template and return it to the client. HTMX then take this template and replaces the `posts` section of HTML with the `post` returned from the server.

# TODO

- check if the template exists before returning it to the client.
- Need to configure tailwind to automatically/globally style specific elements like h1 h2 p etc.. this will make writing the posts much easier. And will also give them a uniform feel.
