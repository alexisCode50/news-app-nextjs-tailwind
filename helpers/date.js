import dayjs from 'dayjs'

export const useDateFormat = () => {

	const customDate = (date) => {
		return dayjs(date).format('MMM DD, YYYY')
  	}

  	return {
  		customDate
  	}

}