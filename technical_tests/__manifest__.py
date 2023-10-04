# -*- coding: utf-8 -*-
{
    'name': 'Módulo de Pruebas Técnicas',
    'version': '1.0',
    'category': 'Custom Development',
    'summary': 'Módulo para pruebas técnicas de la empresa',
    'description': """
        Este módulo se utiliza para realizar pruebas técnicas internas en la empresa.
        Puede contener funcionalidades específicas para evaluaciones y pruebas de conocimientos técnicos.
    """,
    'author': 'Juan Camilo Sandoval Garcia',
    'depends': ['point_of_sale', 'contacts'],
    'data': [
        'views/partner.xml'
    ],
    'assets': {
        'point_of_sale.assets': [
            'technical_tests/static/src/js/models.js',
            'technical_tests/static/src/js/PaymentScreen.js',
            'technical_tests/static/src/js/TestPopup.js',
            ],

        'web.assets_qweb': [
            'technical_tests/static/src/xml/Screens/ClientListScreen/ClientDetailsEdit.xml',
            'technical_tests/static/src/xml/Screens/PaymentScreen/PaymentScreen.xml',
        ],
    },
    'installable': True,
    'application': False,
    'auto_install': False,
}
