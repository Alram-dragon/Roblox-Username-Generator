const dictionary = {
    futuristic: {
        prefixes: ["Cyber", "Neon", "Mech", "Quantum", "Vortex", "Aero", "Delta", "Crypto"],
        suffixes: ["Byte", "Grid", "Core", "Node", "Nova", "Pulse", "Link", "Vector"]
    },
    fantasy: {
        prefixes: ["Mythic", "Shadow", "Rune", "Frost", "Astra", "Eldritch", "Void", "Solar"],
        suffixes: ["Bound", "Weaver", "shard", "Soul", "Glow", "Fang", "Gaze", "Crown"]
    },
    classic: {
        prefixes: ["Blox", "Brick", "Stud", "Guest", "Noob", "Oof", "Mesh", "Tycoon"],
        suffixes: ["Builder", "Lord", "Dev", "Master", "Gamer", "Phantasm", "Force", "Zone"]
    }
};

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generateName() {
    const theme = document.getElementById("theme").value;
    const decor = document.getElementById("decor").value;
    
    let activePrefixes = [];
    let activeSuffixes = [];

    // Filter word tables based on selected dropdown theme
    if (theme === "all") {
        Object.keys(dictionary).forEach(key => {
            activePrefixes = activePrefixes.concat(dictionary[key].prefixes);
            activeSuffixes = activeSuffixes.concat(dictionary[key].suffixes);
        });
    } else {
        activePrefixes = dictionary[theme].prefixes;
        activeSuffixes = dictionary[theme].suffixes;
    }

    let baseName = getRandomElement(activePrefixes) + getRandomElement(activeSuffixes);

    // Apply extra aesthetics/decorations 
    if (decor === "numbers") {
        const randomNum = Math.floor(Math.random() * 90) + 10; // 2 digit number
        baseName += randomNum;
    } else if (decor === "og") {
        baseName = "xX_" + baseName + "_Xx";
    }

    // Roblox maximum username length constraint check
    if (baseName.length > 20) {
        return generateName(); // Re-roll if name is too long for Roblox
    }

    document.getElementById("nameDisplay").innerText = baseName;
}

function copyToClipboard() {
    const nameText = document.getElementById("nameDisplay").innerText;
    if (nameText === "Click Generate!") return;

    navigator.clipboard.writeText(nameText).then(() => {
        const toast = document.getElementById("toast");
        toast.style.opacity = "1";
        setTimeout(() => { toast.style.opacity = "0"; }, 1500);
    });
}
