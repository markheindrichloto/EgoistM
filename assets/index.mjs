export function initializePortfolio() {
    document.getElementById('home').innerHTML = `
    <div class="home">
        <div class="home__background">
            <img src="images/home.jpg" alt="home" class="home__bg-image">
            <div class="home__content">
                <nav class="navbar">
                    <ul class="navbar__list">
                        <li class="navbar__item"><a href="#home" class="navbar__link">Home</a></li>
                        <li class="navbar__item"><a href="#about" class="navbar__link">About</a></li>
                        <li class="navbar__item"><a href="#skills" class="navbar__link">Skills</a></li>
                        <li class="navbar__item"><a href="#project" class="navbar__link">Projects</a></li>
                        <li class="navbar__item"><a href="#contacts" class="navbar__link">Contacts</a></li>
                    </ul>
                </nav>
                <div class="description">
                    <h1 class="title">Hi, I'm M!</h1>
                    <p class="home__description">
                        This website would serve as a platform to showcase my journey as a student, my projects, and the skills I've been developing along the way. From web development to exploring the intricacies of programming, this is where I share my growth and passion for IT.
                        Feel free to look around, learn more about me, and check out some of my work. Thank you for visiting!
                    </p>
                </div>
                <div class="profile" id="profile">
                    <img src="images/profile.jpg" alt="Profile Picture">
                </div>
            </div>
        </div>
    </div>
`;






    document.getElementById('about').innerHTML = `
    <section class="about">
        <div class="section-title">
            <h2>About Me</h2>
            </div>
        <div class="about_me">
            <h3 class="title">Hello there!</h3>
            <p> My name is Mark Heindrich B. Loto, a third-year Information Technology student at the College of Information and Computing Sciences, Marinduque State University. I am passionate about technology, coding, and exploring new ways to create solutions that make life easier and more exciting. 
            I may not excell much at programming but I am eager to learn and face the challenge head-on!</p>
        </div>
        <div class="about_me_profile">
                <img src="images/mee.jpg" alt="Image 1">
        </div>
        <div class="about_me_profile2">
                <img src="images/me1.jpg" alt="Image 2">
        </div>
        </div>
    </section>
    `;

    document.getElementById('skills').innerHTML = `
    <!-- SKILLS SECTION -->
    <section class="section_skills" id="skills">
        <div class="section-title">
        <h2>Skills</h2>
        </div>
        <div class="skills__container bd-grid">          
            <!-- Python -->
            <div class="skill-card">
                <img src="images/python.png" alt="Python Logo" class="skill-card__image">
                <h3 class="skill-card__title">Python</h3>
                <p class="skill-card__description">
                    I am capable of writing Python scripts for various purposes, including automation, data analysis, and basic programming challenges. Familiar with core concepts such as loops, functions, and object-oriented programming. </p>
            </div>
            <!-- HTML -->
            <div class="skill-card">
                <img src="images/html.png" alt="HTML Logo" class="skill-card__image">
                <h3 class="skill-card__title">HTML</h3>
                <p class="skill-card__description">
                    Proficient in structuring web pages using HTML. I understand semantic elements, forms, and multimedia integration to create accessible and well-structured websites.
                    </p>
            </div>
            <!-- CSS -->
            <div class="skill-card">
                <img src="images/css.png" alt="CSS Logo" class="skill-card__image">
                <h3 class="skill-card__title">CSS</h3>
                <p class="skill-card__description">
                    I can style web pages using CSS, creating responsive and visually appealing designs. Familiar with layout techniques such as Flexbox and Grid, as well as animations and transitions.
                    </p>
            </div>
            <!-- Java -->
            <div class="skill-card">
                <img src="images/java.png" alt="Java Logo" class="skill-card__image">
                <h3 class="skill-card__title">Java</h3>
                <p class="skill-card__description">
                I have a foundational understanding of Java, including syntax, object-oriented programming principles, and basic applications such as simple console programs.
                </p>
            </div>
            <!-- JavaScript -->
            <div class="skill-card">
                <img src="images/javascript.png" alt="JavaScript Logo" class="skill-card__image">
                <h3 class="skill-card__title">JavaScript</h3>
                <p class="skill-card__description">
                    I have basic understanding of client-side scripting for interactivity. Able to write and understand simple functions, loops, and DOM manipulation. I am also familiar with integrating JavaScript into web projectsJavaScript is a dynamic programming language commonly used in web development to create interactive effects.
                </p>
            </div>
        </div>
        
    </section>
    `;


    document.getElementById('projects').innerHTML = `
    <section class="section_project" id="project">
        <div class="section-title">
            <h2>Projects</h2>
        </div>
        <div class="project-container">
            <div class="project-item">
                <img src="images/project1.jpg" alt="Project 1" class="project-image">
                <div class="project-description">
                    <h3 class="skill-card__title">Seasons Of Valor</h3>
                    <p>This is a 2d game we made in Computer Graphics Programming during our 2nd year. The game has buttons for jumping, sliding, and running left and right.
                    The mechanics of the game is to avoid falling off the traps and cracks at the floor and defeating the enemies each season has while getting gold coins.
                    </p>
                </div>
            </div>
            <div class="project-item">
                <img src="images/project2.png" alt="Project 2" class="project-image">
                <div class="project-description">
                    <h3 class="skill-card__title">Project 2</h3>
                    <p>This is a by-partner final project we made in Integrative Programming. This is a proposed website design we made titled,
                    "Online Parent - Teacher Communication Platform where Parents and Teachers can communicate in an online-based platform. This project have features like scheduling, student's grades and absencies, and
                    a messaging interface where Parents and Teachers can communicate. 
                    </p>
                </div>
            </div>
        </div>
    </section>
`;


document.getElementById('contacts').innerHTML = `
<section class="section_contact" id="contact" >
    <h2 class="section-contact">Contact</h2>
    <div class="contact-content">
        <div class="contact-left">
            <h3>Reach Out To Me!</h3>
            <p>
                Connect with me through the platforms below or contact me directly using my email or phone number!
            </p>
        </div>
        <div class="contact-right">
            <!-- Facebook -->
            <div class="contact-item">
                <a href="https://facebook.com" target="_blank">
                    <img src="images/facebook.png" alt="Facebook" class="contact-icon">
                </a>
                <h3>Facebook</h3>
            </div>
            <!-- Instagram -->
            <div class="contact-item">
                <a href="https://instagram.com" target="_blank">
                    <img src="images/instagram.png" alt="Instagram" class="contact-icon">
                </a>
                <h3>Instagram</h3>
            </div>
            <!-- Phone -->
            <div class="contact-item">
                <a href="tel:+639853730743" target="_blank">
                    <img src="images/phone.png" alt="Phone" class="contact-icon">
                </a>
                <h3>+63 985 373 0743</h3>
            </div>
            <!-- Email -->
            <div class="contact-item">
                <a href="mailto:markheindrichloto@gmail.com" target="_blank">
                    <img src="images/email.png" alt="Email" class="contact-icon">
                </a>
                <h3>markheindrichloto@gmail.com</h3>
            </div>
        </div>
    </div>
    <!-- Footer -->
    <footer class="footer">
        <p>&copy; 2024 Mark Heindrich B. Loto. All Rights Reserved.</p>
    </footer>
</section>
`;

}


