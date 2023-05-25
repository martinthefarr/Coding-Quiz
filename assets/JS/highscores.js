var leaderboard = JSON.parse(localStorage.getItem("playerinfo")) || []
    for (let i = 0; i < leaderboard.length; i++) {
        // create a list item add my players intials and score then append it to my html on the ul
        var button = document.createElement("button");
        button.textContent = quizArry[quizIndex].options[i]
        button.setAttribute("class", "btn")
        button.onclick = checkAwnser
        document.querySelector("#awnser-buttons").append(button)
    }