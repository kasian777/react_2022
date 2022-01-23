import {useState} from "react";

const Form = (getFilter) => {
    const [form, serForm] = useState({name: '', username: '', email: ''})

    const formHand = (e) => {
        const evenData = {...form, [e.target.name]: e.target.value}
        setForm({...form, ...evenData})
        getFilter(evenData)
    }
    return (
        <div>
            <form>
                <label><input type="text" name={'name'} value={form.name} onChange={formHand}/></label>
                <label><input type="text" name={'username'} value={form.username} onChange={formHand}/></label>
                <label><input type="text" name={'email'} value={form.email} onChange={formHand}/></label>
            </form>
        </div>
    );
};
export {Form}