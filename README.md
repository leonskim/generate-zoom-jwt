# generate-zoom-jwt

Simple JS script that generates Zoom JWT for authentication. Generated token expires in 1 day by default.

## Install
`yarn install`

## Run
`yarn start`

## Example:

```
>> User ID:  leon
>> Session Name:  leon-test-session
>> SDK Key:  tEsTSdkKEy
>> SDK Secret:  **********

Decoded JWT:  {
  app_key: 'tEsTSdkKEy',
  version: 1,
  user_identity: 'leon',
  tpc: 'leon-test-session',
  iat: 1620420772,
  exp: 1620507172
}

Generated JWT:
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfa2V5IjoidEVzVFNka0tFeSIsInZlcnNpb24iOjEsInVzZXJfaWRlbnRpdHkiOiJsZW9uIiwidHBjIjoibGVvbi10ZXN0LXNlc3Npb24iLCJpYXQiOjE2MjA0MjA3NzIsImV4cCI6MTYyMDUwNzE3Mn0.eFcpeQpWlDo2_YW9g3cLZSEUqalQ6CL6SHAYvGSpMXg
```
