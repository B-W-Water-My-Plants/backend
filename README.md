# Water My Plants API

Base URL:

https://water-my-plants-bw.herokuapp.com/

## Authentication

### Register

**[POST]** `/api/auth/register`

#### REQUEST

##### Body

| name       | type   | required | description            |
| ---------- | ------ | -------- | ---------------------- |
| `username` | String | Yes      | Must be unique         |
| `password` | String | Yes      |                        |

_example:_

```
{
  username: "test",
  password: "testing"
}
```

#### RESPONSE

##### 201 (Created)

```
{
  "message": "User registration successful.",
  "id": 9,
  "username": "test"
}
```

### Login

**[POST]** `/api/auth/login`

#### REQUEST

##### Body

| name       | type   | required | description            |
| ---------- | ------ | -------- | ---------------------- |
| `username` | String | Yes      | Must exist in database |
| `password` | String | Yes      | Must exist in database |

_example:_

```
{
  username: "test",
  password: "testing"
}
```

#### RESPONSE

##### 200 (OK)

```
{
  id: 1,
  username: "test",
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjEsInVzZXJuYW1lIjoidGVzdCIsImlhdCI6MTU4MzExODAzNiwiZXhwIjoxNTg0MzI3NjM2fQ.Yd5JCaZJ6cDhGFwSgd1NoOyJ4E4-8IZt7laC_TG_zjc"
}
```

## Plants

### Get all plants for user

**[GET]** `/api/:id/plants`

#### REQUEST

##### URL Parameters

| name | type    | required | description            |
| ---- | ------- | -------- | ---------------------- |
| `id` | Integer | Yes      | ID of logged in user   |

#### RESPONSE

##### 200 (OK)

```
[
  {
      "id": 1,
      "nickname": "Sammy",
      "species": "Cactus",
      "h2o_frequency": "Monthly",
      "image": "pictureurl",
      "user_id": 1
  },
  {
      "id": 2,
      "nickname": "Fred",
      "species": "Fern",
      "h2o_frequency": "Weekly",
      "image": "pictureurl",
      "user_id": 1
  }
]
```

### Get individual plant

**[GET]** `/api/:id/plants/:plantId`

#### REQUEST

##### URL Parameters

| name      | type    | required | description          |
| --------- | ------- | -------- | -------------------- |
| `id`      | Integer | Yes      | ID of logged in user |
| `plantId` | Integer | Yes      | ID of specific plant |

#### RESPONSE

##### 200 (OK)

```
{
  "id": 1,
  "nickname": "Sammy",
  "species": "Cactus",
  "h2o_frequency": "Monthly",
  "image": "pictureurl",
  "user_id": 1
}
```

### Add a Plant

**[POST]** `/api/:id/plants`

#### REQUEST

##### URL Parameters

| name      | type    | required | description          |
| --------- | ------- | -------- | -------------------- |
| `id`      | Integer | Yes      | ID of logged in user |

##### Body

| name            | type    | required | description    |
| --------------- | ------- | -------- | -------------- |
| `nickname`      | String  | Yes      |                |
| `species`       | String  | Yes      |                |
| `h2o frequency` | String  | Yes      |                |
| `image`         | String  | No       |                |

_example:_

```
{
  "nickname": "Fred",
  "species": "Fern",
  "h2o_frequency": "Daily",
  "image": "pictureurl"
}
```

#### RESPONSE

##### 201 (Created)

```
{
  "id": 2,
  "nickname": "Fred",
  "species": "Fern",
  "h2o_frequency": "Daily",
  "image": "pictureurl",
  "user_id": 1
}
```

### Update a Plant

**[PUT]** `/api/:id/plants/:plantId`

#### REQUEST

##### URL Parameters

| name      | type    | required | description          |
| --------- | ------- | -------- | -------------------- |
| `id`      | Integer | Yes      | ID of logged in user |
| `plantId` | Integer | Yes      | ID of specific plant |

##### Body

| name            | type    | required | description    |
| --------------- | ------- | -------- | -------------- |
| `nickname`      | String  | Yes      |                |
| `species`       | String  | Yes      |                |
| `h2o frequency` | String  | Yes      |                |
| `image`         | String  | No       |                |

_example:_

```
{
  "species": "Lemon Tree" // Ex: only changing species.
}
```

#### RESPONSE

##### 200 (OK)

```
{
  "id": 2,
  "nickname": "Fred",
  "species": "Lemon Tree",
  "h2o_frequency": "Daily",
  "image": "pictureurl",
  "user_id": 1
}
```

### Delete a Plant

**[DELETE]** `/api/:id/plants/:plantId`

#### REQUEST

##### URL Parameters

| name      | type    | required | description          |
| --------- | ------- | -------- | -------------------- |
| `id`      | Integer | Yes      | ID of logged in user |
| `plantId` | Integer | Yes      | ID of specific plant |


#### RESPONSE

##### 200 (OK)

```
{
  "message": "Plant has been deleted successfully."
}
```