import jwt from "jsonwebtoken"
import prompt from "prompt"

const schema = {
  properties: {
    userId: {
      message: "User ID:",
      required: true,
    },
    sessionName: {
      message: "Session Name:",
      required: true,
    },
    sdkKey: {
      message: "SDK Key:",
      required: true,
    },
    sdkSecret: {
      message: "SDK Secret:",
      required: true,
      hidden: true,
      replace: "*",
    },
  },
}

function generateZoomJWT({userId, sessionName, sdkKey, sdkSecret}) {
  const payload = {
    "app_key": sdkKey,
    "version": 1,
    "user_identity": userId,
    "tpc": sessionName,
  }

  const options = {
    header: {
      "alg": "HS256",
      "typ": "JWT",
    },
    expiresIn: 86400,
  }

  const token = jwt.sign(payload, sdkSecret, options)
  jwt.verify(token, sdkSecret, (err, decoded) => {
    if (err) {
      console.log("Error: ", err)
      return
    }
    console.log("Decoded JWT: ", decoded)
  })

  console.log("\nGenerated JWT:\n" + token)
}

function onErr(err) {
  console.log(err)
}

prompt.message = ">>"
prompt.delimiter = " "
prompt.start()
prompt.get(schema, (err, ret) => {
  err && onErr(err)
  generateZoomJWT(ret)
})
