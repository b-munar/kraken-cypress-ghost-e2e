# Semana 5 - Pruebas e2e
## Funcionalidades bajo pruebas

* Administrar Páginas (Pages): Esta funcionalidad comprende Crear, Editar, Listar y Borrar páginas del usuario.
* Administrar Posts: Esta funcionalidad comprende Crear, Editar, Listar y Borrar posts del usuario.
* Administrar Etiquetas (Tags): Esta funcionalidad comprende Crear, Editar, Listar y Borrar etiquetas del usuario.
* Administrar Staff: Esta funcionalidad comprende Enviar invitaciones, Revocar invitaciones, Reenviar invitaciones y Listar invitaciones para añadir personas al Staff. También permite editar la información de los miembros del Staff.
* Administrar Perfil de Usuario: Esta funcionalidad comprende Listar la información de perfil de usuario, Editar esta información y Actualizar la contraseña.
* Explorar Información Relacionada a Ghost: Esta funcionalidad comprende navegar a vistas que despliegan información acerca de Ghost, novedades, etc.
* Sign In: Esta funcionalidad permite ingresar a la aplicación con una cuenta ya creada.
* Sign Up: Esta funcionalidad permite Crear una cuenta para utilizar la aplicación.

## Kraken

### Escenarios de Prueba

1. Crear Página: Como usuario administrador hago login en la aplicación, me dirijo a la pestaña de Páginas, elijo la opción Crear Página, ingreso la información y elijo la opción Publicar. La página queda añadida a la lista de páginas publicadas.
2. Editar Página: Como usuario administrador hago login en la aplicación, me dirijo a la pestaña de Páginas, escojo una página, ingreso la nueva información y elijo la opción Actualizar. La página queda actualizada con la nueva información.
3. Previsualizar Página: Como usuario administrador hago login en la aplicación, me dirijo a la pestaña de Páginas, elijo la opción Crear Página, ingreso la información y elijo la opción Previsualizar. Se abre una nueva pestaña previsualizando la información de la página.
4. Eliminar Página: Como usuario administrador hago login en la aplicación, me dirijo a la pestaña de Páginas, escojo una página y elijo la opción de eliminar. La página queda eliminada y no aparece en la lista de páginas.
1. Crear Post: Como usuario administrador hago login en la aplicación, me dirijo a la pestaña de Posts, elijo la opción Crear Post, ingreso la información y elijo la opción Publicar. El post queda añadida a la lista de posts publicados.
4. Eliminar Post: Como usuario administrador hago login en la aplicación, me dirijo a la pestaña de Posts, escojo un post y elijo la opción de eliminar. El Post queda eliminado y no aparece en la lista de posts.
2. Editar Post: Como usuario administrador hago login en la aplicación, me dirijo a la pestaña de Posts, escojo un post, ingreso la nueva información y elijo la opción Actualizar. El post queda actualizado con la nueva información.
3. Crear Post con publicación agendada: Como usuario administrador hago login en la aplicación, me dirijo a la pestaña de Posts, elijo la opción Crear Post, ingreso la información y elijo la opción Agendar para más tarde. El post queda añadida a la lista de posts agendados a publicarse.
1. Crear Tag sin Descripción: Como usuario administrador hago login en la aplicación, me dirijo a la pestaña de Tags, elijo la opción Crear Tag, ingreso el nombre y elijo la opción Guardar. El tag queda añadido a la lista de tags.
2. Crear Tag con Descripción: Como usuario administrador hago login en la aplicación, me dirijo a la pestaña de Tags, elijo la opción Crear Tag, ingreso el nombre y la descripción, y elijo la opción Guardar. El tag queda añadido a la lista de tags.
3. Editar Tag: Como usuario administrador hago login en la aplicación, me dirijo a la pestaña de Tags, escojo un tag, ingreso la nueva información y elijo la opción Guardar. El tag queda actualizado con la nueva información.
4. Crear dos tags con el mismo nombre: Como usuario administrador hago login en la aplicación, me dirijo a la pestaña de Tags, elijo la opción Crear Tag, ingreso el nombre y elijo la opción Guardar. Luego elijo la opción Crear Tag, ingreso el mismo nombre y elijo la opción Guardar. Los tags quedan añadidos a la lista con el mismo nombre, pero con diferente slug.
5. Enviar invitación a Staff: Como usuario administrador hago login en la aplicación, me dirijo a la pestaña de Staff, elijo la opción Invitar, ingreso el email y elijo la opción Enviar Invitación. La invitación se envía y queda añadida a la lista de invitaciones.
6. Revocar invitación a Staff: Como usuario administrador hago login en la aplicación, me dirijo a la pestaña de Staff, escojo una invitación y elijo la opción revocar. La invitación se elimina de la lista de invitaciones.
7. Editar información de un miembro del staff: Como usuario administrador hago login en la aplicación, me dirijo a la pestaña de Staff, escojo un miembro del staff, ingreso la nueva información y elijo la opción Guardar. La información del miembro del staff queda actualizada.
8. Enviar invitación a Staff ya existente: Como usuario administrador hago login en la aplicación, me dirijo a la pestaña de Staff, elijo la opción Invitar, ingreso el email que ya se ha enviado y elijo la opción Enviar Invitación. La invitación no se envía y aparece un mensaje de error.
9. Observar información de perfil: Como usuario administrador hago login en la aplicación, elijo la opción de desplegar menu de usuario y elijo la opción de ver perfil. En la pantalla se puede observar la información de perfil de usuario.
10. Cerrar sesión: Como usuario administrador hago login en la aplicación, elijo la opción de desplegar menu de usuario y elijo la opción de cerrar sesión. La sesión finaliza y vuelvo a la página de iniciar sesión.
11. Cambiar Contraseña: Como usuario administrador hago login en la aplicación, elijo la opción de desplegar menu de usuario , elijo la opción de ver perfil, ingreso la nueva constraseña y elijo la opción de cambiar constraseña. La contraseña es actualizada para el usuario.
12. Navegar a Acerca De: Como usuario administrador hago login en la aplicación, elijo la opción de desplegar menu de usuario y elijo la opción de Acerca De. En la pantalla se puede observar información acerca de la aplicación Ghost.

### Pasos para ejecutar las pruebas

### Evidencias

Se proporcionan videos que evidencian la ejecución de las pruebas:

* [About](https://www.youtube.com/watch?v=yz1a2R7rlRA&t=1s)

## Cypress

Las Funcionalidades selecionadas para la ejecucion de los set de pruebas:


![image](https://user-images.githubusercontent.com/111555319/201560353-2b71fd09-4c8f-4f55-8903-0cbe819f89c5.png)


![image](https://user-images.githubusercontent.com/111555319/201562865-19fcfe94-2849-4b91-b5a0-0398b889362a.png)

### PASOS PARA EJECUTAR LAS PRUEBAS

1. Clone el repositorio de la entrega.
2. Abra una terminal con privilegios de Administrador.
3. Usando el comando cd ubíquese en su terminal en la raíz del repositorio.
4. en la terminal instale el cypress-xpath con el siguiente comando: npm install -D cypress-xpath
5. despues incie el Cypress por medio de las instruccion cypress open
6. una vez habilitado el cypress inicie su instancia de ghost (5.19 -tags ,posts)(5.22 - pages , staff ,other).
