let api = fetch("https://api.github.com/users/eryozha02");
api.then((result) => {
    return result.json();
  })
  .then((response) => {
    let resp = response;
    console.log(resp);
    // creating Header elements with their id's and children

    let cart = document.createElement("div");
    cart.id = "board";
      let header = document.createElement("div")
      header.id = "header"
          let pictureDiv = document.createElement("div")
          pictureDiv.id = "picture"
              let img = document.createElement("img");
              img.src = resp.avatar_url;
          let about = document.createElement("div")
          about.id = "about"
              let name = document.createElement("h2")
              name.id = "name";
              let created = document.createElement("h2")
              created.id = "created";
          let follow = document.createElement("div")
          follow.id = "follow"
              let followers = document.createElement("h2")
              followers.id = followers
              let following = document.createElement("h2")
              following.id = following

       
    // creating Repository's table

    let respUrl = resp.repos_url
    let api2 = new Promise(function(resolve, reject){
            resolve(fetch(respUrl))
    })
    api2.then(result2 => {
        return result2.json()
        
    }).then(response2 => {
        let resp2 = response2.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        let table = document.createElement("table")
        table.id = "table"
        table.innerHTML = `
            <thead>
                  <tr>
                      <td>No</td>
                      <td colspan="2">Repository</td>
                  </tr>
            </thead>
        `
        let tBody2 = document.createElement("tbody");
        resp2.forEach((a, i) => {
          tBody2.innerHTML += `
          
                <tr>
                    <td>${i + 1}</td>
                    <td>${a.created_at.slice(0,10).split(" ")}</td>
                    <td>${a.name}</td>
                </tr>
          
      `
        })

        cart.append(table)
        table.append(tBody2)
    })
          

    // appending Elements to their request's     
    document.body.append(cart);
      cart.append(header)
        header.append(pictureDiv, about, follow)
            pictureDiv.append(img)
            about.append(name, created)
                name.append(resp.name ?? resp.login)
                created.append("Created at " + resp.created_at.slice(0,10))
            follow.append(followers, following)
                followers.append( "Followers " + resp.followers)
                following.append( "Following " + resp.following)
  
       
  })
  .catch((error) => console.log(error));
