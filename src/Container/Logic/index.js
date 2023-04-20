import React from 'react'

const Logic = () => {
  // const actors = [
  //   {
  //     Name: 'Actor1',
  //     payment: 100,
  //   },
  //   {
  //     Name: 'Actor2',
  //     payment: 200,
  //   },
  //   {
  //     Name: 'Actor3',
  //     payment: 150,
  //   },
  // ]
  // actors.forEach((a) => {
  //   a.payment += +10
  // })
  // for (let actor of actors) {
  //   actor.payment += -10
  // }
  // console.log(actors)
  // const student = [
  //   { name: 'student 1', marks: 45 },
  //   { name: 'student 2', marks: 60 },
  //   { name: 'student 3', marks: 35 },
  // ]
  // let result = student.filter((studt) => studt.marks < 45)
  // console.log(result)
  const admins = [2, 3, 5]
  const user = { name: 'xyz', id: 5 }
  // const isAdmin = admins.indexOf(user.id) > -1
  const isAdmin = admins.includes(user.id)
  console.log(isAdmin)
  // const users = [
  //   { name: 'abc', id: 1 },
  //   { name: 'efg', id: 2 },
  //   { name: 'xyz', id: 3 },
  // ]
  // const uersList = users.find((list) => {
  //   if (list.id === 2) {
  //     return true
  //   } else {
  //     return false
  //   }
  // })
  // console.log(uersList)
  return (
    <div>
      <video controls>
        <source src="https://player.vimeo.com/external/354645621.sd.mp4?s=69d6828f9ee9b66b0eafa9a41d60a537c51fb81a&profile_id=164&oauth2_token_id=57447761" />
      </video>
    </div>
  )
}

export default Logic
