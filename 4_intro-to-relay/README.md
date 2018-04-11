This project uses Relay with the Artsy API.

## Setup

* `$ npm install -g yarn`
* `$ cd artsy_relay_start`
* `$ yarn install`

## Tutorial

`artsy_relay_start` is the baseline setup, `artsy_relay_fin` contains a finished version.

Our aim is to take what was previously a downloaded JSON file and turn that into real code. We'll need to do a few
things.

* Add a query fragment to `ArtistItem.tsx`

    ```graphql
    fragment ArtistItem_artist on Artist {
      id
      href
      bio
      name
      image {
        url
      }
    }
    ```

* Add a query fragment to `PopularArtists.tsx`

    ```graphql
    fragment PopularArtists_popular_artists on PopularArtists {
      artists {
        id
        ...ArtistItem_artist
      }
    }
    ```

* Add a Relay Query Renderer to `App.tsx`

    ```graphql
    query AppQuery {
      popular_artists {
        ...PopularArtists_popular_artists
      }
    }
    ```
