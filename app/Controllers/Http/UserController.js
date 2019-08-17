"use strict"

const User = use("App/Models/User")

class UserController {
  async create ({ request }) {
    const data = request.only(["username", "email", "password","type"])
    const hasUser = await User.findBy('email',data.email);
    if (hasUser) {
        return { error: 'Email já cadastrado' }
    }
    const user = await User.create(data)

    return user
  }
}

module.exports = UserController