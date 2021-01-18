<template>
<div id="Loginmalo">
  <div class="container">
            <h2>Ingresa a tu CosechaApp</h2>
              <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Nombre de usuario</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        placeholder="Nombre de usuario">
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone
                        else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Contraseña</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Contraseña">
                </div>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                    <label class="form-check-label" for="exampleCheck1">Recordarme</label>
                </div>
                <button type="submit" class="btn btn-primary">Ingresar</button>
            </form>
            
      </div>
</div>
</template>

<script>
export default {
  name: 'Loginmalo',
  props: {
    msg: String
  }
}
</script>


