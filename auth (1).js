/* ================= RIDECIRCLE — CLIENT-SIDE AUTH =================
   Demo-grade auth using localStorage. No server involved — this
   simulates account creation / login / session so the front-end
   flows (login, join a ride, list a rental bike) all work end-to-end
   inside a static site.
=================================================================== */

const RC_AUTH = {

    USERS_KEY: "rc_users",
    SESSION_KEY: "rc_session",

    _users(){
        try{ return JSON.parse(localStorage.getItem(this.USERS_KEY)) || []; }
        catch(e){ return []; }
    },

    _saveUsers(users){
        localStorage.setItem(this.USERS_KEY, JSON.stringify(users));
    },

    initials(name){
        return name.trim().split(/\s+/).slice(0,2).map(w => w[0].toUpperCase()).join("");
    },

    signup(name, email, password){
        email = email.trim().toLowerCase();
        const users = this._users();
        if(users.some(u => u.email === email)){
            return { ok:false, error:"An account with this email already exists." };
        }
        if(!name || !email || password.length < 4){
            return { ok:false, error:"Please fill every field (password: 4+ characters)." };
        }
        const user = { name: name.trim(), email, password, initials: this.initials(name), joinedRides: [], bikes: [] };
        users.push(user);
        this._saveUsers(users);
        localStorage.setItem(this.SESSION_KEY, email);
        return { ok:true, user };
    },

    login(email, password){
        email = email.trim().toLowerCase();
        const users = this._users();
        const user = users.find(u => u.email === email && u.password === password);
        if(!user){
            return { ok:false, error:"No matching account. Check your email and password." };
        }
        localStorage.setItem(this.SESSION_KEY, email);
        return { ok:true, user };
    },

    logout(){
        localStorage.removeItem(this.SESSION_KEY);
    },

    currentUser(){
        const email = localStorage.getItem(this.SESSION_KEY);
        if(!email) return null;
        return this._users().find(u => u.email === email) || null;
    },

    updateUser(email, patch){
        const users = this._users();
        const idx = users.findIndex(u => u.email === email);
        if(idx === -1) return null;
        users[idx] = Object.assign({}, users[idx], patch);
        this._saveUsers(users);
        return users[idx];
    },

    joinRide(rideId){
        const user = this.currentUser();
        if(!user) return { ok:false };
        const joined = new Set(user.joinedRides || []);
        joined.add(rideId);
        this.updateUser(user.email, { joinedRides: Array.from(joined) });
        return { ok:true };
    },

    hasJoined(rideId){
        const user = this.currentUser();
        return !!(user && (user.joinedRides || []).includes(rideId));
    }
};

/* ================= HEADER STATE ================= */
/* Every page includes a header .buttons block with Login/Sign Up
   links plus (on inner pages) a profile.html avatar-chip link.
   On load, if a session exists, swap those for the real user's
   initials and a logout affordance. */

function rcApplyHeaderAuth(){
    const buttons = document.querySelector("header .buttons");
    if(!buttons) return;

    const user = RC_AUTH.currentUser();
    if(!user) return; // leave default Login / Sign Up markup as-is

    const loginLink = buttons.querySelector(".login");
    const signupLink = buttons.querySelector(".signup");
    if(loginLink) loginLink.remove();
    if(signupLink){
        signupLink.textContent = "Log Out";
        signupLink.href = "#";
        signupLink.addEventListener("click", (e) => {
            e.preventDefault();
            RC_AUTH.logout();
            window.location.reload();
        });
    }

    let chip = buttons.querySelector(".avatar-chip");
    if(!chip){
        chip = document.createElement("a");
        chip.href = "profile.html";
        chip.className = "avatar-chip";
        buttons.appendChild(chip);
    }
    chip.textContent = user.initials;
    chip.title = user.name;
}

document.addEventListener("DOMContentLoaded", rcApplyHeaderAuth);
