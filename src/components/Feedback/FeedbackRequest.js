import React, {Component} from 'react';
import styles from './FeedbackRequest.module.css';
import DropDown from './DropDown';
import SimpleTextArea from './SimpleTextArea';

const arrayOfData = [
    {
    id: '1',
    name: 'ID: 00012345'    
    },
    {
        id: '2',
        name: 'ID: 00023456'    
    },
    {
        id: '3',
        name: 'ID: 00034567'    
    },
];

      class FeedbackRequest extends Component {
        handleSelectChange = (selectedValue) =>{
          this.setState({
            selectedValue: selectedValue
          });
        }
      
        render() {
          return (
            <div className={styles.feedback}>
              <div className={styles.feedback_container}>

                <p className={`${styles.section_title} ${styles.request_selection_title}`}>

                  Select Your Request

                </p>
                <div className={`${styles.section_container} ${styles.request_selection_container}`}>

                  <div>
                    
                    <DropDown arrayOfData={arrayOfData} onSelectChange={this.handleSelectChange}></DropDown>

                  </div>

                </div>
                <p className={`${styles.section_title} ${styles.send_feedback_title}`}>

                  Send Us Your Feedback

                </p>
                <div className={`${styles.section_container} ${styles.experience_rate_container}`}>

                  <div className={`${styles.section} ${styles.experience_rate}`}>

                    <p className={styles.section_subtext}>

                      Rate your experience

                    </p>
                    <div className={`${styles.content} ${styles.content_experience_rate}`}>

                      <form className={styles.content_experience_rate_form}>

                        <div>

                            <label for="rating">1</label>
                            <input type="checkbox" id="rating" name="rate" value="1"/>

                        </div>

                        <div>

                            <label for="rating">2</label>
                            <input type="checkbox" id="rating" name="rate" value="1"/>

                        </div>

                        <div>

                            <label for="rating">3</label>
                            <input type="checkbox" id="rating" name="rate" value="1"/>

                        </div>

                        <div>

                            <label for="rating">4</label>
                            <input type="checkbox" id="rating" name="rate" value="1"/>

                        </div>

                        <div>

                            <label for="rating">5</label>
                            <input type="checkbox" id="rating" name="rate" value="1"/>

                        </div>

                        <div>

                            <label for="rating">6</label>
                            <input type="checkbox" id="rating" name="rate" value="1"/>

                        </div>

                        <div>

                            <label for="rating">7</label>
                            <input type="checkbox" id="rating" name="rate" value="1"/>

                        </div>

                        <div>

                            <label for="rating">8</label>
                            <input type="checkbox" id="rating" name="rate" value="1"/>

                        </div>

                        <div>

                            <label for="rating">9</label>
                            <input type="checkbox" id="rating" name="rate" value="1"/>

                        </div>

                        <div>

                            <label for="rating">10</label>
                            <input type="checkbox" id="rating" name="rate" value="1"/>

                        </div>

                      </form>
                      
                    </div>

                  </div>
                </div>
                <p className={`${styles.section_title} ${styles.Questionnaire_title}`}>
                  Questionnaire
                </p>  
                <div className={`${styles.section_container} ${styles.Questionnaire_left_container}`}>
                  <div className={styles.Questionnaire_question}>
                    <p>
                      Were you satisfied with your service?
                    </p>
                    <div>
                      
                      <SimpleTextArea></SimpleTextArea>

                    </div>
                  </div>
                  <div className={styles.Questionnaire_question}>

                    <p>

                      Did maintenance attend to your needs right away?

                    </p>
                    
                    <div>
                      
                      <SimpleTextArea></SimpleTextArea>

                    </div> 

                  </div>
                  <div className={styles.Questionnaire_question}>

                    <p>

                      Feedback for the facility?

                    </p>
                    <div>
                      
                      <SimpleTextArea></SimpleTextArea>

                    </div>  

                  </div>

                </div>

                <div className={`${styles.section_container} ${styles.Questionnaire_right_container}`}>

                  <div className={styles.Questionnaire_question}>

                    <p>

                      Include any more notes that need to be addressed?

                    </p>
                    <div>
                      
                      <SimpleTextArea></SimpleTextArea>

                    </div>  

                  </div>

                </div>
              </div>
            </div>
          );
        }
      }
      
      export default FeedbackRequest;