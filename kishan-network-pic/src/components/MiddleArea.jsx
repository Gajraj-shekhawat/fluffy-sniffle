import React from 'react';
import styles from './styles/middlearea.module.css';

const MiddleArea = () => {
  return (
    <>
      <div className={styles.container}>
        <div>
          <h2>Justo Vulputate Tortor Sem</h2>
          <h4>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, amet!
            Voluptatem amet corrupti hic, illo, magnam consectetur ipsam
            incidunt quidem eos quis, recusandae explicabo deserunt officiis cum
            commodi accusantium sunt!
          </h4>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
            dolores quasi adipisci recusandae maxime nesciunt in quo voluptatum
            nostrum esse corporis debitis ipsam atque labore totam accusamus
            laboriosam, natus laudantium. Magni labore veniam repellat
            perferendis omnis illo eligendi sed veritatis iusto doloremque,
            accusamus recusandae facilis aliquam est cum a voluptas laborum
            voluptatum, porro itaque velit blanditiis? Mollitia necessitatibus
            rerum
            <div className={styles.float}>
              <h5>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
                rem unde harum odio doloremque numquam eligendi eos. Harum
                tempora nobis,
              </h5>
              <p>- Gajraj </p>
            </div>
            voluptatum. Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Provident incidunt itaque repellat, deleniti quis nihil sequi,
            est hic odio ratione ab labore quia consequatur aspernatur animi?
            Praesentium nesciunt consequuntur consequatur! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Porro quos atque mollitia,
            laboriosam similique possimus illo omnis fugit maxime quod
            recusandae iste aspernatur rerum ducimus soluta, eaque ullam tenetur
            earum! aspernatur animi? Praesentium nesciunt consequuntur
            consequatur! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Porro quos atque mollitia, laboriosam similique possimus illo
            omnis fugit maxime quod recusandae iste aspernatur rerum ducimus
            soluta, eaque ullam tenetur earum!aspernatur animi? Praesentium
            nesciunt consequuntur consequatur! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Porro quos atque mollitia, laboriosam
            similique possimus illo omnis fugit maxime quod recusandae iste
            aspernatur rerum ducimus soluta, eaque ullam tenetur earum!
          </span>
          <div className={styles.more_series}>
            <div></div>
            <div>
              <h2>More in this series</h2>
            </div>
            <div></div>
          </div>
          <div className={styles.more_series_options}>
            <div>
              <img src="https://via.placeholder.com/150" alt="Pic" />
            </div>
            <div>
              <h2>Lorem ipsum dolor sit amet consectetur</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                quibusdam aut ab laborum, Quae quibusdam aut ab laborum, Quae
                quibusdam aut ab laborum,
              </p>
            </div>
          </div>
          <div className={styles.more_series_options}>
            <div>
              <img src="https://via.placeholder.com/150" alt="Pic" />
            </div>
            <div>
              <h2>Lorem ipsum dolor sit amet consectetur</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                quibusdam aut ab laborum, Quae quibusdam aut ab laborum, Quae
                quibusdam aut ab laborum,
              </p>
            </div>
          </div>
        </div>
        <div className={styles.right_div}>
          <div className={styles.menu_items}>
            <h6>Submenu</h6>
            <div>
              <p>Home</p>
              <p>Contact</p>
              <p>Home</p>
              <p>Contact</p>
            </div>
          </div>
          <br />
          <div className={styles.profile}>
            <img src="https://via.placeholder.com/150" alt="cover pic" />
            <div className={styles.profile_row_container}>
              <div className={styles.profile_row}>
                <b>Name</b>
                <p>Gajraj </p>
              </div>
              <div className={styles.profile_row}>
                <b>Name</b>
                <p>Gajraj </p>
              </div>
              <div className={styles.profile_row}>
                <b>Name</b>
                <p>Gajraj </p>
              </div>
            </div>
            <div className={styles.profile_pic}>
              <img src="https://via.placeholder.com/150" alt="" />
            </div>
          </div>
          <div className={styles.message_tray}>
            <h6>Send me a Message</h6>
            <div>
              Subject
              <textarea></textarea>
            </div>
            <div>
              Message
              <textarea></textarea>
            </div>
            <button>Submit</button>
          </div>
          <div>
            <h6>or Meet me at the office</h6>
            <div>
              <iframe
                title="map"
                src={`https://maps.google.com/maps?q=jaipur&t=&z=9&ie=UTF8&iwloc=&output=embed`}
                frameBorder="0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.related_articles}>
        <div>
          <img src="https://via.placeholder.com/250" alt="pic" />
          <h2>Lorem ipsum dolor sit amet consectetur</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
            fugit, libero pariatur temporibus,
          </p>
        </div>
        <div>
          <img src="https://via.placeholder.com/250" alt="pic" />
          <h2>Lorem ipsum dolor sit amet consectetur</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
            fugit, libero pariatur temporibus,
          </p>
        </div>
        <div>
          <img src="https://via.placeholder.com/250" alt="pic" />
          <h2>Lorem ipsum dolor sit amet consectetur</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
            fugit, libero pariatur temporibus,
          </p>
        </div>
        <div>
          <img src="https://via.placeholder.com/250" alt="pic" />
          <h2>Lorem ipsum dolor sit amet consectetur</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
            fugit, libero pariatur temporibus,
          </p>
        </div>
        <div>
          <img src="https://via.placeholder.com/250" alt="pic" />
          <h2>Lorem ipsum dolor sit amet consectetur</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
            fugit, libero pariatur temporibus,
          </p>
        </div>
      </div>
    </>
  );
};

export default MiddleArea;
