import React from 'react'

const Contact = props => (
  <section id="contact">
    <div className="inner">
      <section>
        <form method="post" action="#">
          <div className="field half first">
            <label htmlFor="name">שם</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="field half">
            <label htmlFor="email">מייל</label>
            <input type="text" name="email" id="email" />
          </div>
          <div className="field">
            <label htmlFor="message">הודעה</label>
            <textarea name="message" id="message" rows="6"></textarea>
          </div>
          <ul className="actions">
            <li>
              <input type="submit" value="שלח הודעה" className="special" />
            </li>
            <li>
              <input type="reset" value="נקה" />
            </li>
          </ul>
        </form>
      </section>
      <section className="split">
        <section>
          <div className="contact-method">
            <span className="icon alt fa-envelope"></span>
            <h3>המייל שלנו</h3>
            <a href="#">segev770kap@gmail.com‏</a>
          </div>
        </section>
        <section>
          <div className="contact-method">
            <span className="icon alt fa-phone"></span>
            <h3>טלפון</h3>
            <span>0504344350</span>
          </div>
        </section>
        <section>
          <div className="contact-method">
            <span className="icon alt fa-home"></span>
            <h3>כתובת</h3>
            <span>
              דרך ארץ 68
              <br />
              חריש
              <br />
              ישראל
            </span>
          </div>
        </section>
      </section>
    </div>
  </section>
)

export default Contact
