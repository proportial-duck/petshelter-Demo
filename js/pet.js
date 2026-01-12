const USE_MOCK = true; 
const DB_VERSION = 2; 



// Override location assign for legacy calls in inline scripts if any
// (We can't easily override window.location, so we must rely on manual updates)

// --- MOCK DATA START ---
const INITIAL_MOCK_DATA = {
    users: [
        { id: 101, email: 'a@gmail.com', password: '121212', role: 'admin', name: 'Admin User' },
        { id: 102, email: 'v@gmail.com', password: '121212', role: 'volunteer', name: 'Volunteer User', age: 25, gender: 'Male' },
        { id: 103, email: 'u@gmail.com', password: '121212', role: 'user', name: 'Demo User' }
    ],
    pets: [
        { "id": 1, "name": "Buddy", "type": "Dog", "image": "images/dog_golden.png", "health_status": "green", "status": "available", "description": "Friendly Golden Retriever. Loves fetch and kids.", "history": "Rescued from street.", "vaccine_status": "Fully Vaccinated", "food_habit": "Dry food twice a day." },
        { "id": 2, "name": "Luna", "type": "Dog", "image": "images/dog_husky.png", "health_status": "green", "status": "available", "description": "Energetic Siberian Husky. Needs lots of exercise.", "history": "Surrendered by owner.", "vaccine_status": "Up to date", "food_habit": "High protein diet." },
        { "id": 3, "name": "Max", "type": "Dog", "image": "images/dog_golden.png", "health_status": "green", "status": "available", "description": "Calm and loyal Golden Retriever mix.", "history": "Found wandering.", "vaccine_status": "Vaccinated", "food_habit": "Mix of wet and dry." },
        { "id": 4, "name": "Bella", "type": "Dog", "image": "images/dog_husky.png", "health_status": "yellow", "status": "available", "description": "Sweet Husky pup, recovering from a minor leg injury.", "history": "Born in shelter.", "vaccine_status": "First round done", "food_habit": "Puppy chow." },
        { "id": 5, "name": "Charlie", "type": "Cat", "image": "images/cat_1.webp", "health_status": "green", "status": "available", "description": "Playful Tabby cat.", "history": "Stray.", "vaccine_status": "Vaccinated", "food_habit": "Fish based." },
        { "id": 6, "name": "Lucy", "type": "Cat", "image": "images/cat_1.webp", "health_status": "green", "status": "available", "description": "Quiet and independent.", "history": "Unknown.", "vaccine_status": "Needs booster", "food_habit": "Dry kibble." },
        { "id": 7, "name": "Cooper", "type": "Dog", "image": "images/dog_golden.png", "health_status": "green", "status": "available", "description": "Loves swimming!", "history": "Owner moving.", "vaccine_status": "Fully Vaccinated", "food_habit": "Standard dog food." },
        { "id": 8, "name": "Daisy", "type": "Rabbit", "image": "images/rabbit_1.webp", "health_status": "green", "status": "available", "description": "Fluffy white rabbit, very gentle.", "history": "Gift returned.", "vaccine_status": "None", "food_habit": "Carrots and hay." },
        { "id": 9, "name": "Milo", "type": "Cat", "image": "images/cat_1.webp", "health_status": "red", "status": "available", "description": "Senior cat needing special care.", "history": "Abandoned.", "vaccine_status": "Vaccinated", "food_habit": "Soft food only." },
        { "id": 10, "name": "Rocky", "type": "Dog", "image": "images/dog_husky.png", "health_status": "green", "status": "available", "description": "Brave guard dog personality.", "history": "Rescued.", "vaccine_status": "Fully Vaccinated", "food_habit": "Meat heavy." },
        { "id": 11, "name": "Coco", "type": "Parrot", "image": "images/parrot_1.webp", "health_status": "green", "status": "available", "description": "Chatty Macaw, loves attention.", "history": "Escaped pet.", "vaccine_status": "N/A", "food_habit": "Seeds and fruits." },
        { "id": 12, "name": "Sadie", "type": "Dog", "image": "images/dog_golden.png", "health_status": "yellow", "status": "available", "description": "Shy but sweet.", "history": "Abuse survivor.", "vaccine_status": "Vaccinated", "food_habit": "Regular." },
        { "id": 13, "name": "Oliver", "type": "Cat", "image": "images/cat_1.webp", "health_status": "green", "status": "available", "description": "Loves to cuddle.", "history": "Born in shelter.", "vaccine_status": "Vaccinated", "food_habit": "Any cat food." },
        { "id": 14, "name": "Bear", "type": "Dog", "image": "images/dog_husky.png", "health_status": "green", "status": "available", "description": "Big fluffy giant.", "history": "Owner deceased.", "vaccine_status": "Fully Vaccinated", "food_habit": "Large breed mix." },
        { "id": 15, "name": "Lola", "type": "Rabbit", "image": "images/rabbit_1.webp", "health_status": "green", "status": "available", "description": "Small and quick.", "history": "Found in garden.", "vaccine_status": "None", "food_habit": "Greens." },
        { "id": 16, "name": "Tucker", "type": "Dog", "image": "images/dog_golden.png", "health_status": "green", "status": "available", "description": "Golden Retriever puppy.", "history": "Unwanted litter.", "vaccine_status": "First shots", "food_habit": "Puppy mix." },
        { "id": 17, "name": "Leo", "type": "Cat", "image": "images/cat_1.webp", "health_status": "green", "status": "available", "description": "Orange tabby, very vocal.", "history": "Stray.", "vaccine_status": "Vaccinated", "food_habit": "Wet food." },
        { "id": 18, "name": "Jack", "type": "Dog", "image": "images/dog_husky.png", "health_status": "green", "status": "available", "description": "Intelligent and cunning.", "history": "Returned.", "vaccine_status": "Vaccinated", "food_habit": "Active breed diet." },
        { "id": 19, "name": "Sonic", "type": "Hedgehog", "image": "images/hedgehog_1.webp", "health_status": "green", "status": "available", "description": "Spiky but cute.", "history": "Breeder surrender.", "vaccine_status": "N/A", "food_habit": "Insects." },
        { "id": 20, "name": "Duke", "type": "Dog", "image": "images/dog_golden.png", "health_status": "green", "status": "available", "description": "Regal mannered.", "history": "Stray.", "vaccine_status": "Vaccinated", "food_habit": "Premium kibble." },
        { "id": 21, "name": "Chloe", "type": "Cat", "image": "images/cat_1.webp", "health_status": "yellow", "status": "available", "description": "Needs dental care.", "history": "Hording case.", "vaccine_status": "Vaccinated", "food_habit": "Soft food." },
        { "id": 22, "name": "Bailey", "type": "Dog", "image": "images/dog_golden.png", "health_status": "green", "status": "available", "description": "Older gal, very calm.", "history": "Owner assisted living.", "vaccine_status": "Vaccinated", "food_habit": "Senior diet." },
        { "id": 23, "name": "Stella", "type": "Dog", "image": "images/dog_husky.png", "health_status": "green", "status": "available", "description": "Loves snow!", "history": "Transfer.", "vaccine_status": "Vaccinated", "food_habit": "Raw diet." },
        { "id": 24, "name": "Simba", "type": "Cat", "image": "images/cat_1.webp", "health_status": "green", "status": "available", "description": "Thinks he is a lion.", "history": "Stray.", "vaccine_status": "Vaccinated", "food_habit": "Meaty." },
        { "id": 25, "name": "Oreo", "type": "Rabbit", "image": "images/rabbit_1.webp", "health_status": "green", "status": "available", "description": "Black and white spots.", "history": "Gift.", "vaccine_status": "None", "food_habit": "Hay." },
        { "id": 26, "name": "Polly", "type": "Parrot", "image": "images/parrot_1.webp", "health_status": "green", "status": "available", "description": "Says 'Hello'.", "history": "Owner moved.", "vaccine_status": "N/A", "food_habit": "Pellets." },
        { "id": 27, "name": "Spike", "type": "Hedgehog", "image": "images/hedgehog_1.webp", "health_status": "green", "status": "available", "description": "Likes to run at night.", "history": "Pet store.", "vaccine_status": "N/A", "food_habit": "Worms." },
        { "id": 28, "name": "Buster", "type": "Dog", "image": "images/dog_golden.png", "health_status": "green", "status": "available", "description": "Goofy and lovable.", "history": "Found.", "vaccine_status": "Vaccinated", "food_habit": "Whatever he finds." },
        { "id": 29, "name": "Lily", "type": "Cat", "image": "images/cat_1.webp", "health_status": "green", "status": "available", "description": "White as snow.", "history": "Stray.", "vaccine_status": "Vaccinated", "food_habit": "Tuna." },
        { "id": 30, "name": "Penny", "type": "Dog", "image": "images/dog_husky.png", "health_status": "green", "status": "available", "description": "Small for a husky.", "history": "Runt.", "vaccine_status": "Vaccinated", "food_habit": "High calorie." },
        { "id": 31, "name": "Zoe", "type": "Dog", "image": "images/dog_golden.png", "health_status": "red", "status": "available", "description": "Blind.", "history": "Birth defect.", "vaccine_status": "Vaccinated", "food_habit": "Normal." },
        { "id": 32, "name": "Molly", "type": "Cat", "image": "images/cat_1.webp", "health_status": "green", "status": "available", "description": "Tortoiseshell beauty.", "history": "Stray.", "vaccine_status": "Vaccinated", "food_habit": "Dry." },
        { "id": 33, "name": "Ruby", "type": "Rabbit", "image": "images/rabbit_1.webp", "health_status": "green", "status": "available", "description": "Red eyes, white fur.", "history": "Easter gift.", "vaccine_status": "None", "food_habit": "Veggies." },
        { "id": 34, "name": "Rio", "type": "Parrot", "image": "images/parrot_1.webp", "health_status": "green", "status": "available", "description": "Blue feathers.", "history": "Smuggled.", "vaccine_status": "Checked", "food_habit": "Nuts." },
        { "id": 35, "name": "Ginger", "type": "Dog", "image": "images/dog_golden.png", "health_status": "green", "status": "available", "description": "Reddish coat.", "history": "Owner allergy.", "vaccine_status": "Vaccinated", "food_habit": "Grain free." },
        { "id": 36, "name": "Nala", "type": "Cat", "image": "images/cat_1.webp", "health_status": "green", "status": "available", "description": "Queen of the shelter.", "history": "Long time resident.", "vaccine_status": "Vaccinated", "food_habit": "Paltry." },
        { "id": 37, "name": "Zeus", "type": "Dog", "image": "images/dog_husky.png", "health_status": "green", "status": "available", "description": "Thunderous bark.", "history": "Guard dog.", "vaccine_status": "Vaccinated", "food_habit": "Raw." },
        { "id": 38, "name": "Winnie", "type": "Rabbit", "image": "images/rabbit_1.webp", "health_status": "yellow", "status": "available", "description": "Overgrown teeth.", "history": "Neglect.",
            "vaccine_status": "None", "food_habit": "Hard chew." },
        { "id": 39, "name": "Shadow", "type": "Dog", "image": "images/dog_husky.png", "health_status": "green", "status": "available", "description": "Follows you everywhere.", "history": "Stray.", "vaccine_status": "Vaccinated", "food_habit": "Normal." },
        { "id": 40, "name": "Thumper", "type": "Rabbit", "image": "images/rabbit_1.webp", "health_status": "green", "status": "available", "description": "Big feet.", "history": "Wild born.", "vaccine_status": "None", "food_habit": "Grass." }
    ],
    messages: [],
    adoptions: [
        { id: 1, pet_name: "Buddy", applicant: "John Doe", status: "pending", date: "2023-10-01", email: "john@email.com" }
    ],
    rescues: [
         { id: 1, reporter: "Jane Smith", location: "Central Park", status: "pending", description: "Injured dog found near fountain." }
    ],
    donations: { balance: 5240 }
};

function getMockData() {
    const data = localStorage.getItem('demo_data');
    if (data) return JSON.parse(data);
    localStorage.setItem('demo_data', JSON.stringify(INITIAL_MOCK_DATA));
    return INITIAL_MOCK_DATA;
}

function saveMockData(data) {
    localStorage.setItem('demo_data', JSON.stringify(data));
}

function getSession() {
    const s = sessionStorage.getItem('demo_session');
    return s ? JSON.parse(s) : null;
}

function setSession(user) {
    sessionStorage.setItem('demo_session', JSON.stringify(user));
}

function clearSession() {
    sessionStorage.removeItem('demo_session');
}

// --- MOCK API IMPLEMENTATION ---
async function mockApi(endpoint, method = 'GET', data = null) {
    console.log(`[MOCK API] ${method} ${endpoint}`, data);
    
    await new Promise(r => setTimeout(r, 300)); // Latency sim

    const db = getMockData();
    const url = new URL('http://mock/' + endpoint);
    const path = url.pathname.replace('/', '');
    const params = Object.fromEntries(url.searchParams);
    
    // AUTH
    if (path.includes('auth.php')) {
        const action = params.action;
        
        if (action === 'login') {
            const user = db.users.find(u => u.email === data.email && u.password === data.password);
            if (user) {
                setSession(user);
                return { success: true, role: user.role, user: user };
            }
            return { success: false, error: 'Invalid email or password', code: 'USER_NOT_FOUND' };
        }
        
        if (action === 'logout') {
            clearSession();
            return { success: true };
        }
        
        if (action === 'check_session') {
            const user = getSession();
            if (user) return { loggedIn: true, user: user };
            return { loggedIn: false };
        }
    }
    
    // PETS
    if (path.includes('pets.php')) {
        const action = params.action;
        const id = params.id;
        
        if (method === 'DELETE' && id) {
            db.pets = db.pets.filter(p => p.id != id);
            saveMockData(db);
            return { success: true };
        }

        if (method === 'POST') {
             // Create
             if (!action) {
                 const newPet = { id: Date.now(), ...Object.fromEntries(data) };
                 db.pets.push(newPet);
                 saveMockData(db);
                 return { success: true }; 
             }
             // Update
             if (action === 'update') {
                 const formObj = {};
                 data.forEach((value, key) => formObj[key] = value);
                 const index = db.pets.findIndex(p => p.id == formObj.id);
                 if (index !== -1) {
                     db.pets[index] = { ...db.pets[index], ...formObj };
                     saveMockData(db);
                     return { success: true };
                 }
                return { success: false, error: 'Pet not found for update' };
             }
        }
        
        return db.pets;
    }
    
    // MESSAGES
    if (path.includes('messages.php')) {
        const action = params.action;
        
        if (action === 'get_targets') {
            return { success: true, data: db.users.filter(u => u.role !== 'user') };
        }
        
        if (action === 'get_conversation') {
            const userId = params.user_id;
            const msgs = db.messages.filter(m => m.sender_id == userId || m.receiver_id == userId);
            return { success: true, data: msgs };
        }
        
        if (action === 'send') {
            const session = getSession();
            if(!session) return { success: false, error: 'Not logged in'};
            
            db.messages.push({
                id: Date.now(),
                sender_id: session.id,
                receiver_id: data.receiver_id,
                message: data.message,
                created_at: new Date().toISOString()
            });
            saveMockData(db);
            return { success: true };
        }
    }

    // MISC / ADMIN FEATURES
    if (path.includes('misc.php')) {
        const type = params.type;
        
        if (type === 'donation') {
            return { balance: db.donations.balance };
        }

        if (type === 'create_volunteer') {
            if (method === 'POST') {
                const newVol = {
                    id: Date.now(),
                    ...data,
                    role: 'volunteer'
                };
                db.users.push(newVol);
                saveMockData(db);
                return { success: true };
            }
            // GET
            return db.users.filter(u => u.role === 'volunteer');
        }

        if (type === 'remove_volunteer') {
            db.users = db.users.filter(u => u.id != data.id);
            saveMockData(db);
            return { success: true };
        }
        
        if (type === 'expense_requests') {
             return []; // Implement mock expenses later if needed
        }
        
        if (type === 'expense') {
             return { success: true }; 
        }
    }

    if (path.includes('adoptions.php')) {
        const action = params.action;
        if (action === 'list_pending') {
            return db.adoptions.filter(a => a.status === 'pending');
        }
        if (action === 'approve' || action === 'reject') {
             // Mock approval/rejection logic if needed
             return { success: true };
        }
        if (action === 'submit') {
            // submit adoption
            db.adoptions.push({
                id: Date.now(),
                pet_id: data.pet_id,
                status: 'pending',
                ...data
            });
            saveMockData(db);
            return { success: true };
        }
    }
    
    if (path.includes('rescues.php')) {
        return db.rescues || [];
    }
    
    // Catch-all
    return { success: false, error: 'Demo Endpoint not implemented: ' + endpoint };
}

// --- UI LOGIC ---

// DEBUG BANNER
const banner = document.createElement('div');
banner.id = 'debug-banner';
banner.style.position = 'fixed';
banner.style.top = '0';
banner.style.left = '0';
banner.style.width = '100%';
banner.style.background = '#28a745'; // Green for Demo
banner.style.color = '#fff';
banner.style.textAlign = 'center';
banner.style.padding = '10px';
banner.style.zIndex = '9999';
banner.style.fontSize = '14px';
banner.innerText = 'Demo Mode Active';
banner.style.display = 'block'; 
document.body.appendChild(banner);

// Remove banner after 2s
setTimeout(() => banner.remove(), 2000);

function updateBanner(msg, color) {
    console.log('[Banner]', msg);
    // In SPA mode, maybe show a toast?
}

// findBackendUrl removed/skipped in Mock Mode

async function apiCall(endpoint, method = 'GET', data = null) {
    if (USE_MOCK) return mockApi(endpoint, method, data);
}

function fileToDataUrl(file) {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (e) => resolve(e.target.result);
        reader.readAsDataURL(file);
    });
}

let warmModalCallback = null;

function showWarmModal(title, msg, icon = '🐾', callback = null) {
    let modal = document.getElementById('warm-modal');
    warmModalCallback = callback; 

    if(!modal) {
        modal = document.createElement('div');
        modal.id = 'warm-modal';
        modal.className = 'modal-overlay';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="modal-icon">${icon}</span>
                <h2 class="modal-title">${title}</h2>
                <p class="modal-msg">${msg}</p>
                <button onclick="closeWarmModal()" class="btn btn-primary">Okay!</button>
            </div>`;
        document.body.appendChild(modal);
    } else {
        modal.querySelector('.modal-icon').innerHTML = icon;
        modal.querySelector('.modal-title').innerText = title;
        modal.querySelector('.modal-msg').innerText = msg;
    }
    setTimeout(() => modal.classList.add('active'), 10);
}

function closeWarmModal() {
    const modal = document.getElementById('warm-modal');
    if(modal) {
        modal.classList.remove('active');
        setTimeout(() => {
            if (warmModalCallback && typeof warmModalCallback === 'function') {
                warmModalCallback();
                warmModalCallback = null; 
            }
        }, 300); 
    }
}

async function checkSession() {
    let res = { loggedIn: false };
    try {
        res = await apiCall('auth.php?action=check_session');
    } catch (e) {
        console.error("Session Check Failed:", e);
    }
    
    if (!res || typeof res.loggedIn === 'undefined') {
        res = { loggedIn: false };
    }
    
    updateNav(res.loggedIn, res.user);
    return res;
}

function updateNav(loggedIn, user) {
    const nav = document.getElementById('nav-links');
    if (!nav) return;
    
    let html = `
        <a href="index.html">Home</a>
        <a href="about.html">About Us</a>
        <div class="dropdown">
            <a href="#">Adoption ▾</a>
            <div class="dropdown-content">
                <a href="adopt.html">Adopt a Pet</a>
                <a href="give_pet.html">Give a Pet</a>
                <a href="rescue.html">Report a Rescue</a>
            </div>
        </div>
    `;
    
    if (loggedIn) {
        if (user.role === 'admin') {
            html += `<a href="admin_dashboard.html" class="btn btn-primary">Admin Panel</a>`;
        } else if (user.role === 'volunteer') {
            html += `<a href="volunteer_dashboard.html" class="btn btn-primary">Volunteer Panel</a>`;
        } else {
            html += `<a href="user_dashboard.html" class="btn btn-primary">Dashboard</a>`;
        }
        html += `<a href="#" onclick="logout()">Logout</a>`;
    } else {
        html += `<a href="login.html" class="btn btn-primary">Login / Register</a>`;
    }
    nav.innerHTML = html;
}

let confirmCallback = null;

function showConfirmModal(title, msg, onConfirm, yesText = 'Yes', noText = 'Cancel') {
    let modal = document.getElementById('confirm-modal');
    confirmCallback = onConfirm;

    if(!modal) {
        modal = document.createElement('div');
        modal.id = 'confirm-modal';
        modal.className = 'modal-overlay';
        modal.innerHTML = `
            <div class="modal-content" style="max-width: 350px; text-align: center; padding: 25px;">
                <h3 style="margin-bottom: 10px;">${title}</h3>
                <p style="margin-bottom: 20px; color: #555;">${msg}</p>
                <div style="display: flex; gap: 10px; justify-content: center;">
                    <button id="confirm-yes-btn" onclick="closeConfirmModal(true)" class="btn btn-primary" style="padding: 10px 20px;">${yesText}</button>
                    <button id="confirm-no-btn" onclick="closeConfirmModal(false)" class="btn btn-secondary" style="padding: 10px 20px; background: #ccc; border: none; color: #333;">${noText}</button>
                </div>
            </div>`;
        document.body.appendChild(modal);
    } else {
        modal.querySelector('h3').innerText = title;
        modal.querySelector('p').innerText = msg;
        modal.querySelector('#confirm-yes-btn').innerText = yesText;
        modal.querySelector('#confirm-no-btn').innerText = noText;
    }
    setTimeout(() => modal.classList.add('active'), 10);
}

function closeConfirmModal(confirmed) {
    const modal = document.getElementById('confirm-modal');
    if(modal) {
        modal.classList.remove('active');
        if(confirmed && confirmCallback) confirmCallback();
        confirmCallback = null;
    }
}

async function logout() {
    showConfirmModal("Log Out?", "Are you sure you want to log out of your account?", async () => {
        await apiCall('auth.php?action=logout');
        window.location.href = 'index.html';
    }, "Yes, Logout", "Cancel");
}

async function updatePetDetails(id) {
    const form = document.getElementById('edit-pet-form');
    const formData = new FormData(form);
    formData.append('id', id);

    const res = await apiCall('pets.php?action=update', 'POST', formData);
    
    if (res.success) {
        showWarmModal('Success!', 'Pet profile updated successfully.', '✅', () => {
            closePetModal();
            loadPets(); 
        });
    } else {
        showWarmModal('Error', 'Failed to update: ' + (res.error || 'Unknown error'), '❌');
    }
}

document.addEventListener('DOMContentLoaded', checkSession);

// --- Shared Pet Logic ---

function getStatusColor(status) {
    if (status === 'yellow') return { bg: '#ffc107', text: '#333' };
    if (status === 'red') return { bg: '#dc3545', text: 'white' };
    return { bg: '#28a745', text: 'white' };
}

async function loadPets() {
    const container = document.getElementById('pet-container');
    if (!container) return;

    const pets = await apiCall('pets.php');
    window.allPets = pets || [];
    
    if (!pets || pets.length === 0) {
        container.innerHTML = '<p style="text-align:center; width:100%;">No pets available for adoption right now. Check back later!</p>';
        return;
    }

    container.innerHTML = '';
    pets.forEach(pet => {
        const card = document.createElement('div');
        card.className = 'pet-card';
        let imgPath = pet.image;
        if (imgPath && !imgPath.startsWith('http') && !imgPath.startsWith('images/')) {
             if (imgPath.startsWith('../')) imgPath = imgPath.replace('../backend/', '');
        }
        
        const colors = getStatusColor(pet.health_status);
        
        let statusText = 'Healthy';
        if(pet.health_status === 'yellow') statusText = 'Needs Help';
        if(pet.health_status === 'red') statusText = 'Critical';

        card.innerHTML = `
            <div style="height:200px; overflow:hidden;">
                <img src="${imgPath}" alt="${pet.name}" style="width:100%; height:100%; object-fit:cover;">
            </div>
            <div class="pet-info" style="padding:15px;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:5px;">
                    <h3 style="margin:0;">${pet.name}</h3>
                    <span style="padding:4px 12px; border-radius:20px; background-color:${colors.bg}; color:${colors.text}; font-size:0.8rem; font-weight:bold;">
                        ${statusText}
                    </span>
                </div>
                <p class="type" style="color:#666; font-size:0.9rem; margin-bottom:10px;">${pet.type}</p>
                
                <p style="font-size:0.9rem; color:#555; height:45px; overflow:hidden; margin-bottom:10px; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;">${pet.description || 'No description available.'}</p>
                <button onclick="viewDetails('${pet.id}')" class="btn btn-primary" style="width:100%;">View Details</button>
            </div>
        `;
        container.appendChild(card);
    });
}

// --- Chat System ---

let chatPollInterval = null;
let currentChatUser = null;

function initChat() {
    if (window.location.pathname.includes('login.html') || window.location.pathname.includes('register.html')) {
        return;
    }

    checkSession().then(res => {
        if (res.loggedIn) {
            createChatWidget();
        }
    });
}

function createChatWidget() {
    if (document.getElementById('chat-widget-btn')) return;

    const btn = document.createElement('button');
    btn.id = 'chat-widget-btn';
    btn.className = 'chat-widget-btn';
    btn.innerHTML = `<img src="images/chat_icon_orange.png" alt="Chat" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover;">`;
    btn.onclick = toggleChat;
    document.body.appendChild(btn);

    const box = document.createElement('div');
    box.id = 'chat-box';
    box.className = 'chat-box';
    box.innerHTML = `
        <div class="chat-header">
            <h3 id="chat-title">Messages</h3>
            <button class="chat-close" onclick="toggleChat()">×</button>
        </div>
        <div class="chat-body" id="chat-body">
            <!-- Content goes here -->
        </div>
        <div class="chat-footer" id="chat-footer" style="display:none;">
            <input type="text" id="chat-input" placeholder="Type a message..." onkeypress="handleChatEnter(event)">
            <button onclick="sendChatMessage()">➤</button>
        </div>
    `;
    document.body.appendChild(box);
}

async function toggleChat() {
    const box = document.getElementById('chat-box');
    box.classList.toggle('active');
    
    if (box.classList.contains('active')) {
        if (!currentChatUser) {
            await loadChatTargets();
        } else {
            scrollToBottom();
            startPolling();
        }
    } else {
        stopPolling();
    }
}

async function loadChatTargets() {
    const body = document.getElementById('chat-body');
    const footer = document.getElementById('chat-footer');
    const title = document.getElementById('chat-title');
    
    title.innerText = 'Messages';
    footer.style.display = 'none';
    body.innerHTML = '<p style="text-align:center; margin-top:20px; color:#888;">Connecting...</p>';
    currentChatUser = null;
    stopPolling();

    try {
        const res = await apiCall('messages.php?action=get_targets');
        
        if (res.success && res.data.length > 0) {
            body.innerHTML = '<div class="user-list"></div>';
            const list = body.querySelector('.user-list');
            
            res.data.forEach(user => {
                const item = document.createElement('div');
                item.className = 'user-item';
                item.onclick = () => openConversation(user.id, user.name);
                item.innerHTML = `
                    <div class="user-avatar">${user.name.charAt(0).toUpperCase()}</div>
                    <div class="user-info">
                        <h4>${user.name}</h4>
                        <span>${user.role}</span>
                    </div>
                `;
                list.appendChild(item);
            });
        } else {
            body.innerHTML = `<p style="text-align:center; padding:20px;">No contacts found.</p>`;
        }
    } catch (e) {
        console.error("Chat Error", e);
    }
}

async function openConversation(userId, userName) {
    currentChatUser = userId;
    const body = document.getElementById('chat-body');
    const footer = document.getElementById('chat-footer');
    const title = document.getElementById('chat-title');

    title.innerHTML = `<span onclick="loadChatTargets()" style="cursor:pointer; margin-right:10px;">❮</span> ${userName}`;
    footer.style.display = 'flex';
    body.innerHTML = '<div class="conversation-view" id="chat-messages">Loading...</div>';
    
    await loadMessages();
    startPolling();
}

async function loadMessages() {
    if (!currentChatUser) return;
    
    const res = await apiCall(`messages.php?action=get_conversation&user_id=${currentChatUser}`);
    const container = document.getElementById('chat-messages');
    if (!container) return;

    if (res.success) {
        const myId = (await checkSession()).user.id;
        
        container.innerHTML = '';
        if (res.data.length === 0) {
            container.innerHTML = '<p style="text-align:center; color:#ccc; margin-top:20px;">No messages yet. Say hi!</p>';
            return;
        }

        res.data.forEach(msg => {
            const div = document.createElement('div');
            const isMe = msg.sender_id == myId;
            div.className = `message-bubble ${isMe ? 'message-sent' : 'message-received'}`;
            div.innerText = msg.message;
            container.appendChild(div);
        });
        scrollToBottom();
    }
}

async function sendChatMessage() {
    const input = document.getElementById('chat-input');
    const text = input.value.trim();
    if (!text || !currentChatUser) return;

    input.value = ''; 
    const res = await apiCall('messages.php?action=send', 'POST', {
        receiver_id: currentChatUser,
        message: text
    });

    if (res.success) {
        await loadMessages();
    }
}

function handleChatEnter(e) {
    if (e.key === 'Enter') sendChatMessage();
}

function scrollToBottom() {
    const body = document.getElementById('chat-body');
    body.scrollTop = body.scrollHeight;
}

function startPolling() {
    stopPolling();
    chatPollInterval = setInterval(loadMessages, 3000); 
}

function stopPolling() {
    if (chatPollInterval) clearInterval(chatPollInterval);
    chatPollInterval = null;
}

document.addEventListener('DOMContentLoaded', initChat);

async function askAboutPet(petId, petName) {
    const session = await checkSession();
    if (!session.loggedIn) {
        showWarmModal('Login Required', 'Please login to ask about pets.', '🔒', () => {
            window.location.href = 'login.html';
        });
        return;
    }

    const box = document.getElementById('chat-box');
    if (!box.classList.contains('active')) {
        await toggleChat();
    }
    
    const detailsModal = document.getElementById('pet-details-modal');
    if(detailsModal) detailsModal.classList.remove('active');

    const res = await apiCall('messages.php?action=get_targets');
    let targetId = null;
    let targetName = 'Admin';
    
    if (res.success && res.data.length > 0) {
        const admin = res.data.find(u => u.role === 'admin');
        if (admin) {
            targetId = admin.id;
            targetName = admin.name;
        } else {
            targetId = res.data[0].id;
            targetName = res.data[0].name;
        }
    }
    
    if (!targetId) {
        await toggleChat();
        return;
    }

    await openConversation(targetId, targetName);
    const input = document.getElementById('chat-input');
    input.value = `Hi, I am interested in ${petName}. Is this pet still available?`;
    input.focus();
}
