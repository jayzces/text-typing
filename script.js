const pasta = [
    'Al dente pasta',
    'macaroni pasta vermicelli',
    'angel hair sauce',
    'ravioli penne lasagna',
    'Anelli sauce vermicelli'
]


const textContainer = document.querySelector('#text-replace')


const emptyContainer = () => {
    return new Promise((resolve, reject) => {
        let deletionDuration = 80
        let deleteWord = setInterval(() => {
            let currentContent = textContainer.innerHTML
            textContainer.innerHTML = currentContent.substring(0, currentContent.length - 1)

            if (currentContent.length <= 1) {
                clearInterval(deleteWord)
                // for slight delay after deletion
                setTimeout(() => { resolve() }, deletionDuration * 4)
            }
        }, deletionDuration)
    })
}


const spell = word => {
    let letterCounter = 0
    let spellingDuration = 100
    let spelling = setInterval(() => {
        textContainer.innerHTML = textContainer.innerHTML + word[letterCounter++]

        if (letterCounter >= word.length) clearInterval(spelling)
    }, spellingDuration)
}


let pastaCounter = 0
const fillUp = () => {
    pastaCounter = pastaCounter < pasta.length ? pastaCounter : 0
    emptyContainer().then(() => {
        spell(pasta[pastaCounter++])
    })
}


fillUp()
const interval = setInterval(fillUp, 8000)
