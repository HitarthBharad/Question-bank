<div className='container'>
<label>
    <select onChange={this.handleSubject} value={this.state.s_id} className='browser-default custom-select'>
       {this.state.subject.map(c => (
           <option value={c._id} key={c._id}> 
                    {c.name}
            </option>
       ))}
    </select>
</label>
</div>