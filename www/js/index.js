const { App, Toast, Clipboard } = Capacitor.Plugins;

App.addListener('appStateChange', ({ isActive }) => {// app state is changed, usually sent to the background or suspended
    console.warn('App state changed. Is active: ', isActive);
});

App.addListener('backButton', () => {//back button on android
    console.warn('back button pressed')
})

window.addEventListener('load', function () { mother.start_cooking() })

/*  Mother is all, mother is life */
let mother = {
    selected_background: 0,
    start_cooking: function () {// 👩🏼‍🦳🤌🏼🍲🧀🍅🍍🥭🥪🥗
        console.log("Happy mothers day!");
        console.log("⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣀⣠⣤⣤⣤⣤⣤⣄⣀⡀⠄⠄⠄⠄⠄⠄⠄⠄")
        console.log("⠄⠄⠄⠄⠄⠄⠄⢀⣤⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣤⡀⠄⠄⠄⠄⠄")
        console.log("⠄⠄⠄⠄⠄⢀⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣆⠄⠄⠄⠄")
        console.log("⠄⠄⠄⠄⢠⣿⣿⣿⣿⣿⢻⣿⣿⣿⣿⣿⣿⣿⣿⣯⢻⣿⣿⣿⣿⣆⠄⠄⠄")
        console.log("⠄⠄⣼⢀⣿⣿⣿⣿⣏⡏⠄⠹⣿⣿⣿⣿⣿⣿⣿⣿⣧⢻⣿⣿⣿⣿⡆⠄⠄")
        console.log("⠄⠄⡟⣼⣿⣿⣿⣿⣿⠄⠄⠄⠈⠻⣿⣿⣿⣿⣿⣿⣿⣇⢻⣿⣿⣿⣿⠄⠄")
        console.log("⠄⢰⠃⣿⣿⠿⣿⣿⣿⠄⠄⠄⠄⠄⠄⠙⠿⣿⣿⣿⣿⣿⠄⢿⣿⣿⣿⡄⠄")
        console.log("⠄⢸⢠⣿⣿⣧⡙⣿⣿⡆⠄⠄⠄⠄⠄⠄⠄⠈⠛⢿⣿⣿⡇⠸⣿⡿⣸⡇⠄")
        console.log("⠄⠈⡆⣿⣿⣿⣿⣦⡙⠳⠄⠄⠄⠄⠄⠄⢀⣠⣤⣀⣈⠙⠃⠄⠿⢇⣿⡇⠄")
        console.log("⠄⠄⡇⢿⣿⣿⣿⣿⡇⠄⠄⠄⠄⠄⣠⣶⣿⣿⣿⣿⣿⣿⣷⣆⡀⣼⣿⡇⠄")
        console.log("⠄⠄⢹⡘⣿⣿⣿⢿⣷⡀⠄⢀⣴⣾⣟⠉⠉⠉⠉⣽⣿⣿⣿⣿⠇⢹⣿⠃⠄")
        console.log("⠄⠄⠄⢷⡘⢿⣿⣎⢻⣷⠰⣿⣿⣿⣿⣦⣀⣀⣴⣿⣿⣿⠟⢫⡾⢸⡟⠄⠄")
        console.log("⠄⠄⠄⠄⠻⣦⡙⠿⣧⠙⢷⠙⠻⠿⢿⡿⠿⠿⠛⠋⠉⠄⠂⠘⠁⠞⠄⠄⠄")
        console.log("⠄⠄⠄⠄⠄⠈⠙⠑⣠⣤⣴⡖⠄⠿⣋⣉⣉⡁⠄⢾⣦⠄⠄⠄⠄⠄⠄⠄⠄")
        console.log("⠄⠄⠄⠄⠄⠄⠄⠄⠛⠛⠋⠁⣠⣾⣿⣿⣿⣿⡆⠄⣿⠆⠄⠄⠄⠄⠄⠄⠄")

        setTimeout(() => {
            document.getElementById('create_your_own').classList = "create_your_own_active";
            document.getElementById('mother_data_submit').classList = "mother_data_submit_active"
        }, 5000);

        let linkprams = mother.get_url_variables();

        if (linkprams.mother != undefined) {
            console.log('Splash mother screen');
            document.getElementById("mothers_name").innerHTML = "Happy mothers day, " + linkprams.mother;
            document.title = "Happy mothers day, " + linkprams.mother;
            document.getElementById("mothers_message").innerHTML = this.linkify(linkprams.msg);
            mother.set_background(linkprams.bg);
            this.go_to_motherscreen();
        } else {
            console.log('Settup a new link');
            document.body.style.backgroundImage = "url('img/backgrounds/1.jpg')";
            mother.go_to_settupscreen();
            mother.fill_background_selctor();
        }
        document.getElementById('mother_data_submit').addEventListener('click', function () { generate_link() })
        document.getElementById('create_your_own').addEventListener('click', function () {
            mother.go_to_settupscreen();
            mother.fill_background_selctor();
        })
    },
    set_background: function (id) {
        id = Number(id)
        document.body.style.backgroundImage = `url('img/backgrounds/${id}.jpg')`
        console.log('Set background ', id)
        switch (id) {
            case 1: case 2: case 3: case 5: case 6: case 7: case 13: case 15: case 16: case 17: case 18: case 19: case 20: case 22: case 23: case 24: case 25:
                document.body.className = "dark";
                break;
            case 4: case 8: case 9: case 10: case 11: case 12: case 14: case 21: case 26:
                document.body.className = "light";
                break;
            default:
                document.body.style.backgroundImage = "url('img/backgrounds/1.jpg')";
                document.body.className = "dark"; console.warn('Defaulted on backgroud');
        }
    },
    get_url_variables: function (url) {//Gets url variables as an object
        if (url == undefined) { url = window.location.href }
        //Yoinked from https://gomakethings.com/getting-all-query-string-values-from-a-url-with-vanilla-js/
        var params = {};
        var parser = document.createElement('a');
        parser.href = url;
        var query = parser.search.substring(1);
        var vars = query.split('&');
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split('=');
            params[pair[0]] = decodeURIComponent(pair[1]);
        }
        return params;
        //returns Object { "": "undefined" } if empty
        //Call with var this_url = getParams(window.location.href);
    },
    go_to_motherscreen: function () {//return to mother screen where message is displayed
        document.getElementById('mother_screen').style.display = "block"
        document.getElementById('settup_screen').style.display = "none"
    },
    go_to_settupscreen: function () {//return to mother screen where message is displayed
        document.getElementById('mother_screen').style.display = "none"
        document.getElementById('settup_screen').style.display = "block"
    },
    linkify: function (text) {//Detects links in text
        //https://stackoverflow.com/questions/1500260/detect-urls-in-text-with-javascript
        var urlRegex = /((?:(http|https|Http|Https|rtsp|Rtsp):\/\/(?:(?:[a-zA-Z0-9\$\-\_\.\+\!\*\'\(\)\,\;\?\&\=]|(?:\%[a-fA-F0-9]{2})){1,64}(?:\:(?:[a-zA-Z0-9\$\-\_\.\+\!\*\'\(\)\,\;\?\&\=]|(?:\%[a-fA-F0-9]{2})){1,25})?\@)?)?((?:(?:[a-zA-Z0-9][a-zA-Z0-9\-]{0,64}\.)+(?:(?:aero|arpa|asia|a[cdefgilmnoqrstuwxz])|(?:biz|b[abdefghijmnorstvwyz])|(?:cat|com|coop|c[acdfghiklmnoruvxyz])|d[ejkmoz]|(?:edu|e[cegrstu])|f[ijkmor]|(?:gov|g[abdefghilmnpqrstuwy])|h[kmnrtu]|(?:info|int|i[delmnoqrst])|(?:jobs|j[emop])|k[eghimnrwyz]|l[abcikrstuvy]|(?:mil|mobi|museum|m[acdghklmnopqrstuvwxyz])|(?:name|net|n[acefgilopruz])|(?:org|om)|(?:pro|p[aefghklmnrstwy])|qa|r[eouw]|s[abcdeghijklmnortuvyz]|(?:tel|travel|t[cdfghjklmnoprtvwz])|u[agkmsyz]|v[aceginu]|w[fs]|y[etu]|z[amw]))|(?:(?:25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[1-9][0-9]|[1-9])\.(?:25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[1-9][0-9]|[1-9]|0)\.(?:25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[1-9][0-9]|[1-9]|0)\.(?:25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[1-9][0-9]|[0-9])))(?:\:\d{1,5})?)(\/(?:(?:[a-zA-Z0-9\;\/\?\:\@\&\=\#\~\-\.\+\!\*\'\(\)\,\_])|(?:\%[a-fA-F0-9]{2}))*)?(?:\b|$)/gi;/*/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig*/;
        return text.replace(urlRegex, function (url) {//returns text with imbeded html links
            return '<a href="' + url + '">' + url + '</a>';
        });
    },
    fill_background_selctor: function () {//put images into background selector
        let linkprams = mother.get_url_variables()

        for (let i = 1; i <= 26; i++) {
            build_dot(i)
        }

        function build_dot(id) {
            console.log('Build dot ', id);
            let backgroudn_dot = document.createElement('div');
            if (linkprams.bg == id) {
                backgroudn_dot.className = "backgroudn_dot_active"
            } else {
                backgroudn_dot.className = "backgroudn_dot"
            }
            let image = document.createElement('img');
            //image.height="auto"
            image.src = "img/backgrounds/" + id + ".jpg"
            image.alt = "background " + id;
            backgroudn_dot.appendChild(image)
            document.getElementById('background_chooser').appendChild(backgroudn_dot)
            backgroudn_dot.addEventListener('click', function () {
                document.querySelectorAll('.backgroudn_dot_active').forEach((backgroudn_dot_active) => { backgroudn_dot_active.className = "backgroudn_dot" })
                backgroudn_dot.className = "backgroudn_dot_active"
                mother.selected_background = id;
                mother.set_background(id)
            })
        }

    },
}



async function generate_link() {
    let motherb = document.getElementById('mother_put').value;
    let msg = document.getElementById('message_put').value;
    if (motherb != "") {
        let new_link = `${window.location.href.split("?")[0]}?mother=${motherb}&bg=${this.selected_background}&msg=${msg.replace(/ /g, '%20')}`;//link with variables imbeded and empty spaces replaced with '%20'
        console.log(new_link)

        clipboard_push(new_link)
        console.warn('Created link: ', new_link)
        Toast.show({ text: 'link Coppied to clipboard', duration: 'short', position: 'bottom' });
    } else {
        Toast.show({ text: 'need a name!', duration: 'short', position: 'bottom' });
    }
}

async function clipboard_push(text) {
    try {
        Clipboard.write({ string: text });
    } catch (err) {
        console.log(err);

    }
    text.toString()
    var temptxtbox = document.createElement("input")
    document.body.appendChild(temptxtbox)
    temptxtbox.value = text
    temptxtbox.select()
    document.execCommand("copy")
    document.body.removeChild(temptxtbox)
}