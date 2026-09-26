import LibraryList from './LibraryList';

const Workouts = async() => {
    const workoutPromise = await fetch('https://api.abcz.workers.dev/api/fitlog')
    const data = await workoutPromise.json()
    
    return (
        <div className='mx-5 md:mx-20 mb-16'>
            <LibraryList workouts={data} />
        </div>
    );
};

export default Workouts;