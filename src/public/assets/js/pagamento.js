document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const paymentData = {
        name: document.getElementById('name').value,
        cardNumber: document.getElementById('card-number').value,
        expiryDate: document.getElementById('expiry-date').value,
        cvv: document.getElementById('cvv').value,
        valor: document.getElementById('Valor').value
    };
    
    console.log('Dados do pagamento:', paymentData);
    
    // Simulando uma resposta de pagamento
    const response = {
        status: "success",
        message: "Pagamento realizado com sucesso!",
        valor: 'Valor',
        transaction_id: "1234567890"
    };
    
    alert(response.message);
});