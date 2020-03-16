import axios from 'axios'

export const setActivity = (activities) => {
    return { type: 'SHOW_ACTIVITY', payload: activities }
}

export const startGetActivity = () => {
    return (dispatch) => {
        axios.get('https://panorbit.in/api/activity.json')
            .then(response => {
                const activities = response.data.recentActivity
                console.log(activities)
                dispatch(setActivity(activities))
            })
    }
}