import './DamageLocation.css';
import PageQuery from '../PageQuery/PageQuery';

function DamageLocation(props) {

    return (

        <PageQuery title="Location of damage">

            <div className="damage_location">

                <select name="Bedroom">

                    <option value="" selected disabled hidden>Select</option>
                    <option value="Bedroom">Bedroom</option>
                    <option value="Living Room">Living Room</option>
                    <option value="Kitchen">Kitchen</option>
                    <option value="Bedroom">Bedroom</option>

                </select>

            </div>

        </PageQuery>

    );
}

export default DamageLocation;