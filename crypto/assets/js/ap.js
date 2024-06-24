<<<<<<< Updated upstream
orders.forEach(order =>{
    const tr = document.createElement('tr');
    const trContent = `
        <td>${order.productName}</td>
        <td>${order.productNumber}</td>
        <td>${order.paymentStatus}</td>
        <td class="${order.status === 'declined' ? 'danger' : order.status === 'pending' ? 'warning' : 'primary'}">${order.status}</td>
        <td class="primary"> details</td>
    `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
});

=======
<<<<<<< HEAD
orders.forEach(order =>{
    const tr = document.createElement('tr');
    const trContent = `
        <td>${order.productName}</td>
        <td>${order.productNumber}</td>
        <td>${order.paymentStatus}</td>
        <td class="${order.status === 'declined' ? 'danger' : order.status === 'pending' ? 'warning' : 'primary'}">${order.status}</td>
        <td class="primary"> details</td>
    `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
});

=======
orders.forEach(order =>{
    const tr = document.createElement('tr');
    const trContent = `
        <td>${order.productName}</td>
        <td>${order.productNumber}</td>
        <td>${order.paymentStatus}</td>
        <td class="${order.status === 'declined' ? 'danger' : order.status === 'pending' ? 'warning' : 'primary'}">${order.status}</td>
        <td class="primary"> details</td>
    `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
});

>>>>>>> aa85effbb3cc709e4f63e4ee70e82891af6a2fdb
>>>>>>> Stashed changes
//59:50