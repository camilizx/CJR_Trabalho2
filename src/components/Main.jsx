import users from "../mockdata.js"
import { useState, useEffect } from "react"

const USERS_PER_PAGE = 5;   // Usuarios por pagina

export function Main() {
	const [usersArr, setUsersArr] = useState([])
	const [currentPage, setCurrentPage] = useState(1)                     // Pagina atual (inicial = 1)

	useEffect(() => {
		setUsersArr(users)
	}, [])

	function nextPage() {
		if (currentPage >= Math.ceil(usersArr.length / USERS_PER_PAGE))     // Se eu passar da ultima pagina
			setCurrentPage (1)                                           // Voltar para pagina inicial
		else                                                           
			setCurrentPage (currentPage + 1)
	}
	function prevPage() {
		if (currentPage <= 1)                                            // Se eu voltar antes da primiera pagina
			setCurrentPage (Math.ceil(usersArr.length / USERS_PER_PAGE))    // Volto para ultima
		else
			setCurrentPage (currentPage - 1)
	}
	
	function createPagination() {
		return Array.from({length:Math.ceil(usersArr.length / USERS_PER_PAGE)},(_v,k)=>k+1)
	}

	function deleteUser(deletedUserId) {
		setUsersArr(usersArr.filter((user) => {
			return user.id !== deletedUserId
		}))
	}

	const startIndex = (currentPage -1) * USERS_PER_PAGE
	const endIndex = startIndex + USERS_PER_PAGE
	console.log(usersArr)

	return (
		<main>
		<table class="table">
			<thead>
				<tr>
					<th class="table-head">Nome</th>
					<th class="table-head">Email</th>
					<th class="table-head">Cadastrado em</th>
					<th class="table-head"></th>
				</tr>
			</thead>
			<tbody class="tbody">
				{usersArr.slice(startIndex, endIndex).map(user => {
				return(
				<tr>
					<td>{`${user.first_name} ${user.last_name}`}</td>
					<td>{user.email}</td>
					<td>{user.created_at}</td>
					<td class = "actions_buttons">
						<button class="edit_button">editar</button>
						<button class="delete_button" onClick= {() => deleteUser(user.id)}>excluir</button>
					</td>
				</tr>
				)})}
			</tbody>
		</table>
		
		<div class = "pagination">
			<button class="prevPageButton" type="button" onClick={prevPage}>{'<<'}</button>
			{createPagination().map( number=> (
				<button onClick={() => setCurrentPage(number)}>{number}</button>
			))}
			<button class="nextPageButton" type="button" onClick={nextPage}>{'>>'}</button>
		</div>
	</main>
	);
}
