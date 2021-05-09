
window.addEventListener('load', function () { mother.start_cooking() })

/*  Mother is all, mother is life */
let mother = {
    selected_background: 0,
    start_cooking: function () {
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
            document.getElementById("mothers_name").innerHTML = "Happy mothers day, "+linkprams.mother;
            document.title = "Happy mothers day, "+linkprams.mother;
            document.getElementById("mothers_message").innerHTML = this.linkify(linkprams.msg);
            mother.set_background(linkprams.bg);
            this.go_to_motherscreen();
        } else {
            console.log('Settup a new link');
            document.body.style.backgroundImage = "url('res/img/backgrounds/1.jpg')";
            mother.go_to_settupscreen();
            mother.fill_background_selctor();
        }
        document.getElementById('mother_data_submit').addEventListener('click', function () { mother.generate_link() })
        document.getElementById('create_your_own').addEventListener('click', function () {
            mother.go_to_settupscreen();
            mother.fill_background_selctor();
        })
    },
    set_background: function (id) {
        id = Number(id)
        document.body.style.backgroundImage = "url('res/img/backgrounds/" + id + ".jpg')";
        console.log('Set background ', id)
        switch (id) {
            case 1: case 2: case 3: case 5: case 6: case 7: case 13: case 15: case 16: case 17: case 18: case 19: case 20: case 22: case 23: case 24: case 25:
                document.body.className = "dark";
                break;
            case 4: case 8: case 9: case 10: case 11: case 12: case 14: case 21: case 26:
                document.body.className = "light";
                break;
            default:
                document.body.style.backgroundImage = "url('res/img/backgrounds/1.jpg')";
                document.body.className = "dark"; console.warn('Defaulted on backgroud');
        }
    },
    generate_link: function () {
        let motherb = document.getElementById('mother_put').value;
        let msg = document.getElementById('message_put').value;
        if (motherb != "") {
            let new_link = `${window.location.href.slice(0,38)}?mother=${motherb}&bg=${this.selected_background}&msg=${msg}`;
            console.log(new_link)
            this.clipboard(new_link);
            console.warn('Created link: ', new_link)
            notify.new('Coppied to clipboard', 'Your link was coppied to the clipboard, you may send it to someone by pasting it in a message')
            return new_link;
        } else {
            notify.new('No name', 'Your mother must have a name')
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
            image.src = "res/img/backgrounds/" + id + ".jpg"
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
    clipboard: async function (textpush) {
        textpush.toString()
        var temptxtbox = document.createElement("input")
        document.body.appendChild(temptxtbox)
        temptxtbox.value = textpush
        temptxtbox.select()
        document.execCommand("copy")
        document.body.removeChild(temptxtbox)
    },
}



let notify = {//notification function house
    clap: window.addEventListener('resize', () => { notify.clearall() }),
    new: function (title, body, hover_title, ifunction) {

        let notification = document.createElement("div")
        notification.classList = "notification"

        let notification_title = document.createElement("div")//title
        notification_title.classList = "title"
        notification_title.innerHTML = title

        let nbody = document.createElement("div")//body
        nbody.classList = "notifbody"
        nbody.innerHTML = body;

        if (hover_title != undefined) {
            notification.title = hover_title
        } else {
            notification.title = 'click to dismiss'
        }

        notification.appendChild(notification_title)
        notification.appendChild(nbody)
        document.body.appendChild(notification)

        if (typeof (ifunction) == 'function') { //imbedded function
            notification.addEventListener('click', ifunction);
            //Close button
            let xbutton = document.createElement('div')
            xbutton.setAttribute('class', 'x-button')
            notification.appendChild(xbutton)
            xbutton.title = 'click to dismiss';
            xbutton.addEventListener('click', function (e) { removethis(e, notification) })
        } else {
            notification.addEventListener('click', function (e) { removethis(e, notification) })
        }

        //Timing effects
        setTimeout(() => {
            notification.style.transform = 'translateX(0)'
            notify.shove()
        }, 50);

        setTimeout(() => { notification.style.opacity = '0.0' }, 10000); //dissapear

        setTimeout(() => { try { document.body.removeChild(notification) } catch (err) { console.warn(err) } }, 11000); //remove from document

        function removethis(e, rnotification) {
            e.stopImmediatePropagation();
            rnotification.style.transform = 'translateX(22rem)';
            setTimeout(() => { rnotification.style.opacity = '0.0'; }, 100)
            setTimeout(() => { try { document.body.removeChild(notification) } catch (err) { console.warn(err) } }, 1000)
        }

    },
    shove: function () {
        var notifications = document.querySelectorAll(".notification")
        var reverse = notifications.length - 1;
        for (let i in notifications) {
            notifications[i].style.transform = 'translateY(' + -reverse * 9 + 'rem)';//9 rem., height of notification
            reverse--;//get it, because oposite
        }
    },
    clearall: function () {
        document.querySelectorAll(".notification").forEach((notification) => {
            try {
                notification.style.opacity = '0.0';
                notification.style.transform = 'translate(0,0)'
            } catch (err) {
                console.warn(err)
            }
        })
    }
}