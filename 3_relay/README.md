This project uses Create React App to use Relay with the Artsy API.

### Start

`artsy_relay_start` is the baseline setup. I started with a create-react-app project.

From there I:

* `yarn eject`'d
* Added our relay dependencies. We have a pretty unique setup, so that's a bunch of custom packages.
* Added patch-package to support our unique graphql setup (`__id`)
* Added prettier
* Took the schema from metaphyics and added it to the [data](data) folder
* Added some Relay configuration files inside [src/relay](src/relay)

That's our baseline to start.

### Tutorial

Our aim is to take what was previously a downloaded JSON file and turn that into real code. We'll need to do a few
things.

* Create a Relay Query Renderer
* Add the query:

  ```graphql
  {
    popular_artists {
      artists {
        id
        href
        image {
          url
        }
        name
        bio
      }
    }
  }
  ```

* Convert the `ArtistItem` into a fragment
