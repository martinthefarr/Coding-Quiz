var leaderboard = JSON.parse(localStorage.getItem("playerinfo")) || []
    for (let i = 0; i < leaderboard.length; i++) {
       
        console.log(leaderboard[i])
        var listitem = document.createElement("li")
        listitem.textContent = `Player: ${leaderboard[i].player} Score: ${leaderboard[i].score}`
        var root = document.getElementById("leaderboardlist")
        root.appendChild(listitem)
      
    }