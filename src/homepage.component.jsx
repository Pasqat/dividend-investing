import React from 'react';

const Homepage = () => (
    <div className='homepage'>
        <div className='search'>
            <div className='search-bar'>
             <form className='form-search-bar'>
                <input type='text' name='search field' value='' placeholder='Digita un simbolo per cercare...' />
                <input name='submit' type='submit'/>
             </form>
            </div>
            <div className='stocks-list-container'>
                <div className='header-stocks-list'>
                    <span>Sigla</span>
                    <span>Nome</span>
                    <span>Mercato</span>
                    <span>Rendimento</span>
                    <span>Prezzo Attuale</span>
                    <span>Prezzo Suggerito</span>
                </div>
                <div className='stocks-list'>
                <span>MMM</span>
                <span>3M</span>
                <span>Francoforte</span>
                <span>8.5</span>
                <span>€ 167</span>
                <span>€ 32</span>
                </div>
            </div>
        </div>
    </div>
)

export default Homepage;