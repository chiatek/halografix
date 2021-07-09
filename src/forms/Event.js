import { useContext } from "react";
import { DataContext } from "../context/AppData";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";

function Event(props) {
    const [ context ] = useContext(DataContext);
    let availability = [];
    let disabledDays = [];
    let scheduled = [];
    let details;

    if (context.data !== undefined) {

        let arr = context.data.filter(item => item.availability);

        if (arr[0] !== undefined) {
            availability = arr[0].availability;
            scheduled = availability.filter(item => item.fields.scheduled === 1);
        }
        
        scheduled.map(item => {
            const date = new Date(item.fields.date);
            const offset = new Date(date.getTime() + Math.abs(date.getTimezoneOffset()*60000));
            const dd = offset.getDate();
            const mm = offset.getMonth();
            const yyyy = offset.getFullYear();

            return disabledDays.push(new Date(yyyy, mm, dd));
        });

        if (props.data.category === "wedding") {
            details = <div className="form-group">
                <label htmlFor="details">
                    Are there any details you would like to share about your wedding?
                </label><br />
                <textarea name="details" value={props.data.details} onChange={props.handleChange} />
            </div>
        }
        else if (props.data.category === "sports") {
            details = <div className="form-group">
                <label htmlFor="details">Sport</label><br />
                <select name="details" onChange={props.handleChange}>
                    <option hidden value="none"> -- select an option -- </option>
                    <option value="soccer">soccer</option>
                    <option value="baseball">baseball</option>
                    <option value="football">football</option>
                    <option value="basketball">basketball</option>
                    <option value="hockey">hockey</option>
                    <option value="other">other</option>
                </select>
            </div>
        }
        else {
            details = <div className="form-group">
                <label htmlFor="details">
                    Are there any details you would like to share about your event?
                </label><br />
                <textarea name="details" value={props.data.details} onChange={props.handleChange} />
            </div>
        }
    }

    return (
        <>
            <div className="form-group" >
                <label style={props.data.required} htmlFor="date">*Select the date of your event using the calendar below. Only available dates can be selected.</label><br /><br />
                <div className="calendar hidden center">
                    <DayPicker 
                        selectedDays={props.data.date}
                        onDayClick={props.handleDayClick}
                        numberOfMonths={2} 
                        pagedNavigation
                        disabledDays={[{ daysOfWeek: [1, 2, 3, 4, 5] }, {before: new Date()}, ...disabledDays.map(day => new Date(day))]}
                    />
                </div>
                <div className="calendar-mobile center">
                    <DayPicker 
                        selectedDays={props.data.date}
                        onDayClick={props.handleDayClick}
                        numberOfMonths={1} 
                        pagedNavigation
                        disabledDays={[{ daysOfWeek: [1, 2, 3, 4, 5] }, {before: new Date()}, ...disabledDays.map(day => new Date(day))]}
                    />
                </div>
                <input type="text" name="date" value={props.data.date ? props.data.date.toISOString().substring(0, 10) : ""} onChange={props.handleChange} readOnly/>
                <p><small>{props.data.date ? props.data.date.toLocaleDateString() + " is available!" : ""}</small></p>
            </div>
            <div className="form-group">
                <label style={props.data.required} htmlFor="location">*Location <small>(City or Venue Name)</small></label><br />
                <input type="text" name="location" value={props.data.location} onChange={props.handleChange} />
                <small>*Travel fees my apply if outside of Southwest Florida</small>
            </div>
            {details}
        </>
    );
}

export default Event;