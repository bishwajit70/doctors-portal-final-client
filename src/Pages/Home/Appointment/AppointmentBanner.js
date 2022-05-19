import { DayPicker } from 'react-day-picker';
import chair from '../../../assets/images/chair.png'
import bg from '../../../assets/images/bg.png'


import 'react-day-picker/dist/style.css';
import { convertToHsl } from 'daisyui/src/colors/functions';
const AppointmentBanner = ({ date, setDate }) => {

    return (
        <div
            style={{
                backgroundImage: `url(${bg})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            }}
            className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt='Banner Chair' />
                <div className='mr-10 shadow-lg rounded-lg p-10'>
                    <DayPicker
                        mode='single'
                        selected={date}
                        onSelect={setDate}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;