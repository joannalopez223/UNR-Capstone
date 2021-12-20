import PageQuery from "../PageQuery/PageQuery";

function RequestDate(props) {
  return (
    <PageQuery title="Date Requested">
      <div>
        <select name="Day">
          <option value="" selected disabled hidden>
            Day
          </option>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
          <option value="Sunday">Sunday</option>
        </select>
        <select name="Month">
          <option value="" selected disabled hidden>
            Month
          </option>
          <option value="January">January</option>
          <option value="Tuesday">Saab</option>
          <option value="Wednesday">Fiat</option>
          <option value="Thursday">Audi</option>
          <option value="Friday">Audi</option>
          <option value="Saturday">Audi</option>
          <option value="Sunday">Audi</option>
        </select>
        <select name="Year">
          <option value="" selected disabled hidden>
            Year
          </option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
          <option value="2026">2026</option>
          <option value="2027">2027</option>
        </select>
      </div>
    </PageQuery>
  );
}

export default RequestDate;
