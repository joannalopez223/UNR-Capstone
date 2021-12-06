import styles from './RequestMedia.module.css';
import PageQuery from '../PageQuery/PageQuery';

function RequestMedia(props) {
    return (

        <PageQuery title="Upload Images or Video">

            <div className={styles.request_media}>

                <p>

                    Drop images or video here

                </p>

            </div>

        </PageQuery>
        
    );
}

export default RequestMedia;