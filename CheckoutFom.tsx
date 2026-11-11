import React, { JSX, useState } from "react";

interface CheckoutFormProps {
    onSubmitOrder: (formData: { name: string; phone: string; address: string }) => void;
    onCancel: () => void;
}

export function CheckoutForm({ onSubmitOrder, onCancel }: CheckoutFormProps): JSX.Element {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        address: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.phone || !formData.address) {
            alert("Заполните все поля!");
            return;
        }
        onSubmitOrder(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <h3 className="text-xl font-extrabold text-gray-900 mb-4">
                Оформление заказа
            </h3>

            {/* Поле: Имя */}
            <div className="space-y-1">
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
                    Имя:
                </label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Тарас"
                    required
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white transition"
                />
            </div>

            {/* Поле: Телефон */}
            <div className="space-y-1">
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
                    Телефон:
                </label>
                <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+380..."
                    required
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white transition"
                />
            </div>

            {/* Поле: Адрес */}
            <div className="space-y-1">
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
                    Адрес доставки:
                </label>
                <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Улица, дом, квартира"
                    required
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white transition"
                />
            </div>

            {/* Кнопки управления */}
            <div className="flex items-center gap-3 pt-2">
                <button
                    type="submit"
                    className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-4 rounded-xl transition shadow-md active:scale-[0.99] text-sm"
                >
                    Подтвердить заказ
                </button>
                <button
                    type="button"
                    onClick={onCancel}
                    className="px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-xl transition text-sm"
                >
                    Отмена
                </button>
            </div>
        </form>
    );
}