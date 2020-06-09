import React from 'react'
import './style.css'

export default function FormEditor() {
    return (
        <form class="form">

            <h1 class="form_title">Редактирование</h1>

            <div class="form_space">
                <input class="form_input" placeholder=" " />
                <label class="form_label">Введите фамилию</label>
            </div>

            <div class="form_space">
                <input class="form_input" placeholder=" " />
                <label class="form_label">Введите имя</label>
            </div>

            <div class="form_space">
                <input class="form_input" placeholder=" " />
                <label class="form_label">Введите курс</label>
            </div>

            <div class="form_space">
                <input class="form_input" placeholder=" " />
                <label class="form_label">Введите возраст</label>
            </div>

            <button class="form_button">Сохранить</button>
            <button class="form_button_cancel">Отмена</button>
        </form>
    )
}