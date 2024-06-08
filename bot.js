const pertanyaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")


let init = 0

const botSay = (data) => {
    return [
         "Hallo perkenalkan nama saya ariabot. Siapa nama kamu?",
         `Hello ${data?.nama} berapa usia kamu?`,
         `ohhh ${data?.usia}, hobi kamu apa?`,
         `wawww hobi kita sama aku juga hobi ${data?.hobi} btw kamu udah punya pacar belum?`,
         `ohh ${data?.pacar} yaudh kalo gitu...udh dulu yah bye bye aku bosen ngobrol sama kamu wkwk😂☕`
     ]
}

pertanyaan.textContent = botSay()[0]

let userData = []

function botStart() {
    init++
    if(init === 1) {
        botDelay({nama: jawaban.value})
    } else if (init === 2) {
        botDelay({usia: jawaban.value})
    } else if(init === 3) {
        botDelay({hobi: jawaban.value})
    } else if(init === 4) {
        botDelay({pacar: jawaban.value})
    } else if(init === 5) {
        finishing()
    } else {
        botEnd()
    }

}

function botDelay(jawabanUser) {
    console.log({userData: userData})
    setTimeout(() => {
        pertanyaan.innerHTML = botSay(jawabanUser)[init]
    },[1250])
    userData.push(jawaban.value)
    jawaban.value = ""
}

function finishing() {
    pertanyaan.innerHTML = `thank u ya ${userData[0]} udah mau main ke ariabot, lain kali kita main ${userData[2]} bareng ya😁!!!`
    jawaban.value = "bye bye sampai ketemu lagi!"
}

function botEnd() {
    window.location.reload()
}