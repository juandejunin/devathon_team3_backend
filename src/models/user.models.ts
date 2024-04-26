import mongoose, { Schema, Document } from 'mongoose';

// Definición de la interfaz para el documento del jugador
interface UserDocument extends Document {
  nombre: string;
  puntos: number;
  tiempoDeJuego: number;
}

// Definición del esquema del jugador
const userSchema: Schema<UserDocument> = new Schema({
  nombre: {
    type: String,
    required: true
  },
  puntos: {
    type: Number,
    default: 0 // Puntos por defecto serán 0
  },
  tiempoDeJuego: {
    type: Number,
    default: 0 // Tiempo de juego por defecto será 0
  }
});

// Creación del modelo 'Jugador' basado en el esquema definido
const User = mongoose.model<UserDocument>('User', userSchema);

export default User;
