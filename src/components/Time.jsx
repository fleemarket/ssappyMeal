export default function Time(){     

	const today = new Date();

	const formattedDate = `${today.getFullYear()}년 ${today.getMonth()+1}월 ${today.getDay()}일`

	const dashDate = `${today.getFullYear().toString().slice(-2)}-${today.getMonth()+1}-${today.getDay()}`

	return(
		<div>{formattedDate}</div>
	)

}
