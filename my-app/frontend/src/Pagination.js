import React from 'react'

export default function Pagination({ pagination, setPage }) {
	const styles = {
		wrapper: {
			display: 'flex',
			flexDirection: "row",
			justifyContent: 'center'
		},
		label: {
			marginRight: '20px',
			cursor: 'pointer'
		},
		selected: {
			color: 'white',
			backgroundColor: 'black'
		}
	}

	const pages = Array(pagination.total).fill(null).map((_, i) => i + 1) //генерирует массив чисел от 1 до количества страниц которое
	//должно быть

	return (
		<div style={styles.wrapper}>
			{pages.map(page => {
				const style = { ...styles.label }

				if (pagination.current === page) {
					Object.assign(style, styles.selected)
				}

				return <div style={style} onClick={() => setPage(page)} key={page}>{page}</div> //setPage из getPagination (userHooks.js)
				//приводит к загрузке новой страницы и новых пользователей
			})}
		</div>
	)
}

