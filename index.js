console.log("this is my cv screener");
const data = [
    {
        name: 'sameer',
        age: '21',
        lanaguage: 'python',
        image: 'https://randomuser.me/api/portraits/men/15.jpg',
        city: 'hyderabad'
    },
    {
        name: 'muzammil',
        age: '24',
        lanaguage: 'java',
        image: 'https://randomuser.me/api/portraits/men/13.jpg',
        city: 'karachi'
    },
    {
        name: 'sara',
        age: '12',
        lanaguage: 'javascript',
        image: 'https://randomuser.me/api/portraits/women/15.jpg',
        city: 'islamabad'
    },
    {
        name: 'hyder gul',
        age: '29',
        lanaguage: 'go',
        image: 'https://randomuser.me/api/portraits/men/29.jpg',
        city: 'hyderabad'
    }
]

// cv iterator

function cvIterator(profiles){
    let nextIndex=0;
    return{
        next: function () {
            return nextIndex<profiles.length ?
            {value: profiles[nextIndex++], done: false}:
            {done: true}
        }
    };
}

const Candidate = cvIterator(data)

// creating event listner for the button

let next = document.getElementById('next');
next.addEventListener('click' , nextCv);

function nextCv() {
    let currentCandidate = Candidate.next().value;
    let image = document.getElementById('image');    
    let profile = document.getElementById('profile');    
    if (currentCandidate != undefined) {
        image.innerHTML = `<img src="${currentCandidate.image}" alt="">`;
    profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">Name: ${currentCandidate.name}</li>
    <li class="list-group-item">Language: ${currentCandidate.lanaguage}</li>
    <li class="list-group-item">Age: ${currentCandidate.age}</li>
    <li class="list-group-item">city: ${currentCandidate.city}</li>
  </ul>`
    }
    else{
        alert("End of Candidate Appliccation")
        window.location.reload();
    }
    console.log(currentCandidate.image)
}