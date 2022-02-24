import app from "./app"
import { login } from "./endpoints/login"
import { signup } from "./endpoints/signup"
import { getUserProfile } from "./endpoints/getUserProfile"
import { getAnotherUserProfile } from "./endpoints/getAnotherUserProfile"
import { createRecipe } from "./endpoints/createRecipe"
import { getRecipe } from "./endpoints/getRecipe"
import { followUser } from "./endpoints/followUser"
import { unfollowUser } from "./endpoints/unfollowUser"

app.get('/user/profile', getUserProfile)
app.get('/user/:id', getAnotherUserProfile)

app.post('/user/follow', followUser)
app.post('/user/unfollow', unfollowUser)
app.post('/signup', signup)
app.post('/login', login)

app.get('/recipe/:id', getRecipe)
app.post('/recipe', createRecipe)

