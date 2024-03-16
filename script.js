let check = Array.from(document.getElementsByClassName("check"))


function hack() {

  let text = Array.from(document.getElementsByClassName("text"))
  let target = document.getElementById("target").value;

  // Async Await

  const hackapi = async function() {
    
    {
      for (let i = 1; i < text.length; i++) {
        text[i].innerHTML = " "
      }
    }

    let step1 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        text[1].innerHTML = "Hacking user..."
        resolve(1)
      }, 1000)
    })
    let step2 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        text[2].innerHTML = "user located"
        resolve(1)
      }, 1000)
    })
    let step1a = await new Promise((resolve, reject) => {
      setTimeout(() => {
        text[2].innerHTML = `username:${target} ; `
        resolve(1)
      }, 1000)
    })
    let step1b = await new Promise((resolve, reject) => {
      setTimeout(() => {
        text[2].innerHTML += ` password:XXXXXXX ;`
        resolve(1)
      }, 500)
    })
    let step1c = await new Promise((resolve, reject) => {
      setTimeout(() => {
        text[2].innerHTML += ` number:+91XXXXXXXXXX`
        resolve(1)
      }, 800)
    })
    let step3 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        text[3].innerHTML = "getting device info..."
        resolve(1)
      }, 1000)
    })
    if (check[0].checked) {
      let step5 = await new Promise((resolve, reject) => {
        setTimeout(() => {
          text[4].innerHTML = "facebook hacked"
          resolve(1)
        }, 1000)
      })
    }
    if (check[1].checked) {
      let step5 = await new Promise((resolve, reject) => {
        setTimeout(() => {
          text[4].innerHTML = "Instagram hacked"
          resolve(1)
        }, 1000)
      })
    }
    let step5 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        text[4].innerHTML = "resetting passwords..."
        resolve(1)
      }, 1000)
    })
    let step6 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        text[2].innerHTML = "access granted to phone"
        resolve(1)
      }, 1000)
    })
    let step7 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        text[2].innerHTML = "logs generated"
        resolve(1)
      }, 1000)
    })
    let step8 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        text[5].innerHTML = "hacking status: pending..."
        resolve(1)
      }, 1000)
    })
    let step9 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        text[5].innerHTML = "hacking status: hacked! succesfully -_+"
        resolve(1)
      }, 3000)
    })
  }
  hackapi()
}
