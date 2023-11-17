import './Home.css';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className='centered-text'>
      <h1>Elliott Perryman: Online Resume</h1>
      <h1> Test </h1>
      <p>Recent grad with a background in math, physics, and computer science.</p>
      <div className="container">
        <div className="left-column">
          <h2>Work Experience</h2>

          <h3>Researcher at Institut Laue-Langevin, Grenoble, France</h3>
          <p><em>May 2022 - July 2023</em></p>
          <div className="left-text">
            <ul>
              <li>Created Bayesian and Frequentist autonomous experimentation methods that decrease experimentation lifetime by approximately 10X.</li>
            </ul>
          </div>

          <h3>Software Developer at Caravel Concepts LLC, Remote</h3>
          <p><em>January 2021 - August 2021</em></p>
          <div className="left-text">
            <ul>
              <li>Accelerated resource allocation algorithm using jax and some math by 6X and wrote Django+Postgres APIs.</li>
            </ul>
          </div>

          <h3>Intern at Lawrence Berkeley National Lab, Berkeley CA</h3>
          <p><em>August 2019 - June 2021</em></p>
          <div className="left-text">
            <ul>
              <li>Sped up Gaussian process tool GPCAM by 20X using PyTorch, with code open-sourced.</li>
              <li>Published crystallography refinement algorithm.</li>
            </ul>
          </div>

          <h3>Researcher at Oak Ridge National Lab, Oak Ridge TN</h3>
          <p><em>August 2017 - June 2021</em></p>
          <div className="left-text">
            <ul>
              <li>Ported signal processing method to GPU using CUDA FFT: processing time went from ~15s to ~2s, meeting the ~13s requirement.</li>
              <li>Using ML methods to quickly identify anomalous signals (it took a couple of days to find a signal that haunted the data for more than a year).</li>
            </ul>
          </div>
          </div>
          <div className='right-column'>
          <div className="left-text">
            <h2>Skills:</h2>
            <div className="clt">
              <ul>
                <li>
                  <details><summary>
                    Programming Languages</summary>
                    <ul>
                      <li>
                        <details><summary>C Family</summary>
                          <ul>
                            <li><Link to='/blog?search=c%20language'>C language</Link></li>
                            <li><Link to='/blog?search=c%2B%2B'>C++</Link></li>
                            <li><Link to='/blog?search=CUDA'>CUDA</Link></li>
                            <li><Link to='/blog?search=openMPI'>openMPI</Link></li>
                            <li><Link to='/blog?search=openMP'>openMP</Link></li>
                          </ul>
                        </details>
                      </li>
                      <li>
                        <details><summary>Python</summary>
                          <ul>
                            <li><Link to='/blog?search=Numpy'>Numpy</Link></li>
                            <li><Link to='/blog?search=Jax'>Jax</Link></li>
                            <li><Link to='/blog?search=Numba'>Numba</Link></li>
                            <li><Link to='/blog?search=Pandas'>Pandas</Link></li>
                            <li><Link to='/blog?search=sklearn'>sklearn</Link></li>
                            <li><Link to='/blog?search=Pytorch'>Pytorch</Link></li>
                            <li><Link to='/blog?search=Django'>Django</Link></li>
                          </ul>
                        </details>
                      </li>
                      <li>
                        <details><summary><Link to='/blog?search=SQL'>SQL</Link></summary>
                          <ul>
                            <li><Link to='/blog?search=Postgres'>Postgres</Link></li>
                          </ul>
                        </details>
                      </li>
                      <li><Link to='/blog?search=Julia'>Julia</Link></li>
                      <li><Link to='/blog?search=R'>R</Link></li>
                      <li>
                        <details><summary>Frontend</summary>
                          <ul>
                            <li><Link to='/blog?search=HTML'>HTML</Link></li>
                            <li><Link to='/blog?search=CSS'>CSS</Link></li>
                            <li><Link to='/blog?search=Javascript'>Javascript</Link></li>
                            <li><Link to='/blog?search=React'>React</Link></li>
                          </ul>
                        </details>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <details><summary>Physics & Comp. Sci & Applied Math Skills</summary>
                    <ul>
                      <li>
                        <details><summary>Optimization</summary>
                          <ul>
                            <li><Link to='/blog?search=Distributed%20Optimization'>Distributed Optimization</Link></li>
                            <li><Link to='/blog?search=Bayesian%20Optimization'>Bayesian Optimization</Link></li>
                            <li><Link to='/blog?search=Numerical%20Optimization'>Numerical Optimization</Link></li>
                            <li><Link to='/blog?search=Linear%20and%20Quadratic%20Programming'>Linear and Quadratic Programming</Link></li>
                          </ul>
                        </details>
                      </li>
                      <li>
                        <details><summary>Inference (including ML Methods)</summary>
                          <ul>
                            <li><Link to='/blog?search=Parametric%20Bayesian%20Inference'>Parametric Bayesian Inference</Link></li>
                            <li><Link to='/blog?search=Gaussian%20Processes'>Gaussian Processes</Link></li>
                            <li><Link to='/blog?search=Convolutional%20Neural%20Networks'>Convolutional Neural Networks</Link></li>
                            <li><Link to='/blog?search=NLP%20Transformers'>NLP Transformers</Link></li>
                          </ul>
                        </details>
                      </li>
                      <li><Link to='/blog?search=Fourier%20Analysis'>Fourier Analysis and Filtering</Link></li>
                      <li><Link to='/blog?search=Digital%20Signal%20Processing'>Digital Signal Processing</Link></li>
                      <li><Link to='/blog?search=Linear%20Algebra'>Linear Algebra</Link></li>
                      <li><Link to='/blog?search=Parallelization'>Parallelization</Link></li>
                      <li><Link to='/blog?search=Monte-Carlo%20Methods'>Monte-Carlo Methods</Link></li>
                    </ul>
                  </details>
                </li>
                <li>
                  <details><summary>Technical Communication</summary>
                    <ul>
                      <li>
                        <details><summary>Talks & Seminars</summary>
                          <ul>
                            <li><a href="#PresentationSESAPS">SESAPS 2018 (Best Oral Presentation) </a></li>
                            <li><a href="#PresentationDNP">APS DNP 2019 talk on outlier detection with k means</a></li>
                            <li><a href="#PresentationPoster">Several poster presentations on ORNL GPU work</a></li>
                          </ul>
                        </details>
                      </li>
                      <li>
                        <details><summary>Papers / Reports</summary>
                          <ul>
                            <li>blank</li>
                          </ul>
                        </details>
                      </li>
                      <li>
                        <details><summary>Posters</summary>
                          <ul>
                            <li>blank</li>
                          </ul>
                        </details>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <details><summary>Languages</summary>
                    <ul>
                      <li>English (native)</li>
                      <li>French (intermediate)</li>
                      <li>Russian (beginner)</li>
                    </ul>
                  </details>
                </li>
              </ul>
            </div>
          </div>
          <h2>EDUCATION</h2>
          <h3><a href="#EducationMath">Master Applied Math at Grenoble INP & Univ. Grenoble-Alpes</a></h3>
          <p><em>Fall 2021 - Spring 2023</em></p>
          <div className="left-text">
            <ul>
              <li>Grew my math skills, but found the program not challenging enough.</li>
            </ul>
          </div>
          <h3><a href="#EducationCSPhysics">Bachelor’s Computer Science Honors and Physics at Univ. Tennessee at Knoxville</a></h3>
          <p><em>Fall 2016 - Spring 2021</em></p>
          <div className="left-text">
            <ul>
              <li>Started in computer science but fell in love with physics problem-solving.</li>
              <li>Took graduate machine learning and mathematics courses.</li>
            </ul>
          </div>
        </div>



      </div>
    </div>
  )
};

export default Home;
