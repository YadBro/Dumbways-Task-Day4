let blogs = [];
const month = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'Mei',
    'Jun',
    'Jul',
    'Agust',
    'Sept',
    'Okt',
    'Nov',
    'Des'
];

function addBlog(event) {
    /** menambahkan blog post baru*/
    event.preventDefault();

    const projectNameInput = document.querySelector('#projectName').value;
    const projectDateInput = {
        startDate: document.querySelector('#startDate').value,
        endDate: document.querySelector('#endDate').value
    }
    const projectDescriptionInput = document.querySelector('#description').value;
    const projectTechnologiesInput = {
        nodeJs: document.querySelector('input[name="nodeJsTechnology"]').checked,
        nextJs: document.querySelector('input[name="nextJsTechnology"]').checked,
        reactJs: document.querySelector('input[name="reactJsTechnology"]').checked,
        typeScript: document.querySelector('input[name="typeScriptTechnology"]').checked
    };
    let projectImageInput = document.querySelector('#fileImage');
    projectImageInput = URL.createObjectURL(projectImageInput.files[0]);

    let blog = {
        title: projectNameInput,
        date: projectDateInput,
        description: projectDescriptionInput,
        icons: projectTechnologiesInput,
        image: projectImageInput
    }
    blogs.push(blog);


    // console.log(projectNameInput, projectDateInput, projectDescriptionInput, projectTechnologiesInput, projectImageInput);

    renderBlog();
}

function renderBlog() {
    const containerBlog = document.querySelector('.projects-list');
    containerBlog.innerHTML = firstBlogContent();

    for (let index = 0; index < blogs.length; index++) {
        // Formatting
        const date = new Date(blogs[index].date.startDate);
        const date2 = new Date(blogs[index].date.endDate);
        const monthIndex = date.getMonth(); // 11
        const year = date.getFullYear();

        const hour = date.getHours()
        let minute = date.getMinutes()
        const calculate = getDistanceTime(date, date2);

        containerBlog.innerHTML += `
            <div class="project-card">
                <div class="card">
                    <img src="${blogs[index].image}" alt="Card Image">
                    <div class="card-title">
                        <h3><a href="#" id='${blogs[index].title}'>${blogs[index].title} - ${year}</a></h3>
                    </div>
                    <div class="card-duration">
                        <small>duration: 3 month</small>
                    </div>
                    <div class="card-description">
                        <p>${blogs[index].description}</p>
                    </div>
                    <div class="logos">
                        <div class="img-icon">
                        ${(blogs[index].icons.nodeJs === true) ? '<img src="assets/img/node-js.png" id="nodeJsIcon" alt="nodeJsIcon">' : ''}
                        ${(blogs[index].icons.nextJs === true) ? '<img src="assets/img/next-js.png" id="nextJsIcon" alt="nextJsIcon">' : ''}
                        ${(blogs[index].icons.reactJs === true) ? '<img src="assets/img/react-js.png" id="reactJsIcon" alt="reactJsIcon">' : ''}
                        ${(blogs[index].icons.typeScript === true) ? '<img src="assets/img/typescript.png" id="typeScriptIcon" alt="typeScriptIcon">' : ''}
                        </div>
                    </div>
                    <div class="actions">
                        <button class="edit-button">edit</button>
                        <button class="delete-button">delete</button>
                    </div>
                </div>
            </div>
        `;

    }

}


function firstBlogContent() {
    return `<div class="project-card">
                <div class="card">
                    <img src="https://source.unsplash.com/1280x1080?webdesign" alt="Card Image">
                    <div class="card-title">
                        <h3><a href="#">Web Application - 2022</a></h3>
                    </div>
                    <div class="card-duration">
                        <small>duration: 2</small>
                    </div>
                    <div class="card-description">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis molestiae ipsa itaque
                            ipsam
                            quisquam sed quas quis nisi explicabo recusandae.</p>
                    </div>
                    <div class="logos">
                        <div class="img-icon">
                            <img src="assets/img/node-js.png" id="nodeJsIcon" alt="nodeJsIcon">
                            <img src="assets/img/react-js.png" id="reactJsIcon" alt="reactJsIcon">
                            <img src="assets/img/next-js.png" id="nextJsIcon" alt="nextJsIcon">
                            <img src="assets/img/typescript.png" id="typeScriptIcon" alt="typeScriptIcon">
                        </div>
                    </div>
                    <div class="actions">
                        <button class="edit-button">edit</button>
                        <button class="delete-button">delete</button>
                    </div>
                </div>
            </div>
            <div class="project-card">
                <div class="card">
                    <img src="https://source.unsplash.com/1280x1080?programming" alt="Card Image">
                    <div class="card-title">
                        <h3><a href="#">Web Application - 2022</a></h3>
                    </div>
                    <div class="card-duration">
                        <small>duration: 3</small>
                    </div>
                    <div class="card-description">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis molestiae ipsa itaque
                            ipsam
                            quisquam sed quas quis nisi explicabo recusandae.</p>
                    </div>
                    <div class="logos">
                        <div class="img-icon">
                            <img src="assets/img/node-js.png" id="nodeJsIcon" alt="nodeJsIcon">
                            <img src="assets/img/react-js.png" id="reactJsIcon" alt="reactJsIcon">
                            <img src="assets/img/next-js.png" id="nextJsIcon" alt="nextJsIcon">
                            <img src="assets/img/typescript.png" id="typeScriptIcon" alt="typeScriptIcon">
                        </div>
                    </div>
                    <div class="actions">
                        <button class="edit-button">edit</button>
                        <button class="delete-button">delete</button>
                    </div>
                </div>
            </div>
            <div class="project-card">
                <div class="card">
                    <img src="https://source.unsplash.com/1280x1080?developer" alt="Card Image">
                    <div class="card-title">
                        <h3><a href="#">Web Application - 2022</a></h3>
                    </div>
                    <div class="card-duration">
                        <small>duration: 1</small>
                    </div>
                    <div class="card-description">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis molestiae ipsa itaque
                            ipsam
                            quisquam sed quas quis nisi explicabo recusandae.</p>
                    </div>
                    <div class="logos">
                        <div class="img-icon">
                            <img src="assets/img/node-js.png" id="nodeJsIcon" alt="nodeJsIcon">
                            <img src="assets/img/react-js.png" id="reactJsIcon" alt="reactJsIcon">
                            <img src="assets/img/next-js.png" id="nextJsIcon" alt="nextJsIcon">
                            <img src="assets/img/typescript.png" id="typeScriptIcon" alt="typeScriptIcon">
                        </div>
                    </div>
                    <div class="actions">
                        <button class="edit-button">edit</button>
                        <button class="delete-button">delete</button>
                    </div>
                </div>
            </div>
            <div class="project-card">
                <div class="card">
                    <img src="https://source.unsplash.com/1280x1080?programming" alt="Card Image">
                    <div class="card-title">
                        <h3><a href="#">Web Application - 2022</a></h3>
                    </div>
                    <div class="card-duration">
                        <small>duration: 1</small>
                    </div>
                    <div class="card-description">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis molestiae ipsa itaque
                            ipsam
                            quisquam sed quas quis nisi explicabo recusandae.</p>
                    </div>
                    <div class="logos">
                        <div class="img-icon">
                            <img src="assets/img/node-js.png" id="nodeJsIcon" alt="nodeJsIcon">
                            <img src="assets/img/react-js.png" id="reactJsIcon" alt="reactJsIcon">
                            <img src="assets/img/next-js.png" id="nextJsIcon" alt="nextJsIcon">
                            <img src="assets/img/typescript.png" id="typeScriptIcon" alt="typeScriptIcon">
                        </div>
                    </div>
                    <div class="actions">
                        <button class="edit-button">edit</button>
                        <button class="delete-button">delete</button>
                    </div>
                </div>
            </div>
            <div class="project-card">
                <div class="card">
                    <img src="https://source.unsplash.com/1280x1080?developer" alt="Card Image">
                    <div class="card-title">
                        <h3><a href="#">Web Application - 2022</a></h3>
                    </div>
                    <div class="card-duration">
                        <small>duration: 3</small>
                    </div>
                    <div class="card-description">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis molestiae ipsa itaque
                            ipsam
                            quisquam sed quas quis nisi explicabo recusandae.</p>
                    </div>
                    <div class="logos">
                        <div class="img-icon">
                            <img src="assets/img/node-js.png" id="nodeJsIcon" alt="nodeJsIcon">
                            <img src="assets/img/react-js.png" id="reactJsIcon" alt="reactJsIcon">
                            <img src="assets/img/next-js.png" id="nextJsIcon" alt="nextJsIcon">
                            <img src="assets/img/typescript.png" id="typeScriptIcon" alt="typeScriptIcon">
                        </div>
                    </div>
                    <div class="actions">
                        <button class="edit-button">edit</button>
                        <button class="delete-button">delete</button>
                    </div>
                </div>
            </div>
            <div class="project-card">
                <div class="card">
                    <img src="https://source.unsplash.com/1280x1080?webdesign" alt="Card Image">
                    <div class="card-title">
                        <h3><a href="#">Web Application - 2022</a></h3>
                    </div>
                    <div class="card-duration">
                        <small>duration: 2</small>
                    </div>
                    <div class="card-description">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis molestiae ipsa itaque
                            ipsam
                            quisquam sed quas quis nisi explicabo recusandae.</p>
                    </div>
                    <div class="logos">
                        <div class="img-icon">
                            <img src="assets/img/node-js.png" id="nodeJsIcon" alt="nodeJsIcon">
                            <img src="assets/img/react-js.png" id="reactJsIcon" alt="reactJsIcon">
                            <img src="assets/img/next-js.png" id="nextJsIcon" alt="nextJsIcon">
                            <img src="assets/img/typescript.png" id="typeScriptIcon" alt="typeScriptIcon">
                        </div>
                    </div>
                    <div class="actions">
                        <button class="edit-button">edit</button>
                        <button class="delete-button">delete</button>
                    </div>
                </div>
            </div>`;
}

function getDistanceTime(time, time2) {
    // console.log(typeof time);
    // selisih waktu saat ini - waktu postingan = selisih waktu
    const distance = (time2 - time)
    // console.log(distance);
    //convert to day
    const miliseconds = 1000
    const secondInMinute = 60
    const minuteInHour = 60
    const secondInHour = secondInMinute * minuteInHour // 3600
    const hourInDay = 23

    let dayDistance = distance / (miliseconds * secondInHour * hourInDay)

    if (dayDistance >= 1) {
        const time = Math.floor(dayDistance) + ' day'
        return time
    } else {
        let hourDistance = Math.floor(distance / (miliseconds * secondInHour))
        if (hourDistance > 0) {
            return hourDistance + ' hour'
        } else {
            let minuteDistance = Math.floor(distance / (miliseconds * secondInMinute))
            return minuteDistance + ' minute'
        }
    }
}

// window.onbeforeunload = function () {
//     return 'If you reload, refresh, redirect, and close. data will be removed!';
// }

// function removeStorageItem() {
//     // Dapatkan performance entries data
//     const perfEntries = performance.getEntriesByType("navigation");

//     // Looping performance entries data
//     for (let i = 0; i < perfEntries.length; i++) {
//         // Dapatkan performance entries data
//         let p = perfEntries[i];
//         // Cek jika tipe data entrynya reload
//         if (p.type === 'reload') {
//             // Hapus data sementaranya
//             for (let index = 0; index < localStorage.length; index++) {
//                 const keyName = localStorage.key(index);
//                 localStorage.removeItem(keyName);

//             }
//         }

//     }
// }

// removeStorageItem();