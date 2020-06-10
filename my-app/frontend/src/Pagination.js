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
			border: '1px solid black'
		}
	}

	const pages = Array(pagination.total).fill(null).map((_, i) => i + 1)

	return (
		<div style={styles.wrapper}>
			{pages.map(page => {
				const style = { ...styles.label }

				if (pagination.current === page) {
					Object.assign(style, styles.selected)
				}

				return <div style={style} onClick={() => setPage(page)} key={page}>{page}</div>
			})}
		</div>
	)
}

